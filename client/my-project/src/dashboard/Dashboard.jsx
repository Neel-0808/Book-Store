import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Example data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Books Sold',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Book Sales',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#333',
        },
        grid: {
          borderDash: [5, 5],
          color: '#ddd',
        },
      },
    },
  };

  // Example data
  const totalBooksSold = 3400;  // Example total books sold
  const totalRevenue = '$32,320'; // Example revenue
  const averageRating = '4.5'; // Example average rating

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-end p-4 lg:p-24 w-full">
      <div className="w-full bg-white rounded-lg shadow-md mx-auto p-6 max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Bookstore Dashboard</h1>
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Book Sales</h2>
            <div className="w-full h-80"> {/* Adjusted height */}
              <Bar data={data} options={options} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <dl className="flex items-center">
                <dt className="text-gray-500 text-sm">Total Revenue:</dt>
                <dd className="text-gray-900 text-sm font-semibold">{totalRevenue}</dd>
              </dl>
              <dl className="flex items-center justify-end">
                <dt className="text-gray-500 text-sm">Average Rating:</dt>
                <dd className="text-gray-900 text-sm font-semibold">{averageRating}</dd>
              </dl>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Books Sold</h3>
              <p className="text-3xl font-bold text-blue-700">{totalBooksSold}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
