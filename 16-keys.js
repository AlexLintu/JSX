import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Alex', 'Bob', 'Rob'];

const peopleLis = people.map((person, i) => <li key={'person_' + i}>{person}</li>);

ReactDOM.render(
    <ul>{peopleLis}</ul>,
    document.getElementById('app')   
);