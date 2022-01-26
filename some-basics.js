import React from "react";
import ReactDOM from "react-dom";
// const ReactDOM = require('react-dom');

//For component -> you must capitalize the function name
// Classical function component
// function Greeting() {
//   return <h2>React</h2>;
// }

/*Arrow function style react component.
  If React.createElement() function is used, then html tag must be in a string.
  But it will be messy too earlier from above, so it is not useful.
*/
// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello wosrld");
// };

//Nestion other components to this component
//React.Fragment is a virtual container. Thanks to this feature,
//we can wrap our elements with virtual root element.
const Greeting = () => (
  <>
    <Person />
    <SayHello />
  </>
);

//Arrow func component with implicit return;
const SayHello = () => (
  <div>
    <h3>Hello Everybody</h3>
  </div>
);

//Arrow func component with return statement
const Person = () => {
  return (
    <div>
      <h3>John Champion</h3>
    </div>
  );
};

/*
  Some essential musts.
  1-) Use camelCase for html attributes
  2-) "className" is used for declaring a class
  3-) Close every element. Unlike html, not closing some html element causes an error
  4-) Use React.Fragment(<></>) to wrap 2 or more html element on the root level
  5-) 
*/

ReactDOM.render(<Greeting />, document.getElementById("root"));
