import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';

const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect( () =>{
        fetch("").then(res =>res.json()).then(data => setBooks)
    },[])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default FavoriteBooks