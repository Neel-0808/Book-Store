import React from 'react'
import Banner from './Banner'
import BestSellerBooks from './BestSellerBooks'
import FavoriteBook from './FavoriteBook'
import PromoBanner from './PromoBanner'
import OtherBokks from './OtherBokks'
import ReviewBook from './ReviewBook'

const Home = () => {
  return (
    <>
    <Banner />
    <BestSellerBooks />
    <FavoriteBook />
    <PromoBanner />
    <OtherBokks />
    <ReviewBook />
    </>
  )
}

export default Home