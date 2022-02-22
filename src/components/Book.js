import React from 'react'
// import Image from './Image'
// import Title from './Title'
// import Author from './Author'
// import books from './BookData'

const Book = (props) => {
  const { img, title, author, } = props.book;
  return (
    <article className='book'>
      <img src={img} alt="Book" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
