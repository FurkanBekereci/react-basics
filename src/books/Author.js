/*You can add style without using css file
  1-) Use style attribute and javascript object.
  2-) To use javascript object in react side you have to use {}
    to go to js world. And then use js object including style attributes
*/
const Author = ({ author }) => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    {author}
  </h4>
);

export default Author;
