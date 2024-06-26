import React from 'react'
import Banner from '../component/Banner'
import FavoriteBooks from './FavoriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (
    <>
      {/* <div className='h-screen'>Home</div> */}
      {/* <div className="h-screen bg-red-600"></div> */}
      <Banner />
      <FavoriteBooks />
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </>
  )
}

export default Home