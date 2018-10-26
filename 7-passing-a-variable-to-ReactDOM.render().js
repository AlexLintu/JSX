import React from 'react';
import ReactDOM from 'react-dom';

const myList = (
  <ul>
    <li>Make coffee</li>
    <li>Code</li>
    <li>Code some more</li>
  </ul>
);

ReactDOM.render(
  myList, document.getElementById('app')
);

// The virtual DOM: https://www.codecademy.com/articles/react-virtual-dom