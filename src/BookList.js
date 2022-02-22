import React from 'react';
import Book from './components/Book';
import books from './components/BookData';

const App = () => {
  return (
    <section className='bookLsit'>
      {books.map((book) => {
        return <Book key={book.id} book={book}/>
      })}
    </section>
  );
}

export default App;
