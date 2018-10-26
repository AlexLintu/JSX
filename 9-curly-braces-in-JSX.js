import React from 'react';
import ReactDOM from 'react-dom';

// Everything inside of the curly braces is treated as regular JavaScript:
ReactDOM.render( <h1>{2 + 3}</h1>, document.getElementById('app') ); // Outputs `5` on the screen

// Everything without the curly braces is treated as HTML:
ReactDOM.render( <h1>2 + 3</h1>, document.getElementById('app') ); // Outputs `2 + 3` on the screens