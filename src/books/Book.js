import React from 'react';
import Author from './Author';
import Image from './Image';
import Title from './Title';

/*
  You can use children prop to get child elements of component
  children is special prop for react component, 
 */
const Book = ({ src, title, author, children }) => {
  // const { src, title, author } = book;
  // console.log('src:', src, ',title:', title, ',author:', author);
  // attribute , eventHandler
  const clickHandler = (e) => {
    console.log(e);
  };
  const complexFunction = (message) => {
    alert(message);
  };
  return (
    // inline event in for article
    <article
      className="book"
      onMouseOver={(e) => {
        console.log(e);
      }}
    >
      <Image src={src} title={title} />
      <Title title={title} />
      <Author author={author} />
      {/* implicit event for button */}
      <button style={{ display: 'block' }} type="button" onClick={clickHandler}>
        Event example
      </button>
      {/* event that trigger my custom function */}
      <button type="button" onClick={() => complexFunction('Testinsfasg')}>
        Passing argument ex
      </button>
      {children}
    </article>
  );
};

export default Book;
