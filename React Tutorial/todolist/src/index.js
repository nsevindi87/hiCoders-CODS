import React from 'react';
import ReactDom from 'react-dom';

function App(){
    return <h1>Hello React</h1>
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);