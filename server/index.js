const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Correct usage of express.json() middleware
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/book", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB Connected Successfully...."))
.catch(err => console.error(err));

// Define Book model
const bookSchema = new mongoose.Schema({
    authorName: String,
    imageUrl: String,
    category: String,
    bookDescription: String,
    bookTitle: String,
    bookPdfUrl: String
});
const Book = mongoose.model('Book', bookSchema);

// Routes
app.get('/all-books', async (req, res) => {
    try {
        let { category } = req.query;
        
        // Trim quotes if present
        if (category && category.startsWith('"') && category.endsWith('"')) {
            category = category.slice(1, -1);
        }
        
        console.log("Category:", category); // Log the category parameter
        let books;
        if (category) {
            books = await Book.find({ category });
            console.log("Books found:", books); // Log the books found
        } else {
            books = await Book.find({});
        }
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/uploadbook', async (req, res) => {
    try {
        const data = req.body;
        const result = await Book.create(data);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single book by ID
app.get('/book/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update book route
app.patch('/updatebook/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await Book.findByIdAndUpdate(id, data, { new: true });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete book route
app.delete('/book/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.deleteOne({ _id: id });
        
        if (result.deletedCount === 0) {
            res.status(404).json({ message: "No book found with this ID" });
        } else {
            res.json({ message: "Book deleted successfully" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
