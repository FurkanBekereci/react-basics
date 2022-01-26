import React from 'react';
import ReactDOM from 'react-dom';
import Book from './books/Book';
import { bookList } from './books/books';

//css import
import './index.css';

/*
  1-To pass an object prop, you can use it directly with propkey (key={obj})
  2-Second way of passing object like a prop, we can use spread 
    Only add {...obj} to component tag.
*/
const BookList = () => (
  <section className="booklist">
    {bookList.map((book) => (
      <Book {...book} key={book.id}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          temporibus enim? Tenetur veniam a quasi nulla fugit dolorum nesciunt,
          rem explicabo eum, labore eligendi, et sit quo quia ratione ea
          hagiiii!
        </p>
      </Book>
    ))}
  </section>
);

ReactDOM.render(<BookList />, document.getElementById('root'));
