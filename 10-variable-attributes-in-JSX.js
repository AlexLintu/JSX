// JS
import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

const gooseImg = ( // JSX starts from `(`
  <img src={goose} /> // JS continues in `{}`
); // JSX ends in `)`

// JS
ReactDOM.render(gooseImg, document.getElementById('app'));