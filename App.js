import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';

function App() {
    return (<>
        <Heading />
        <Para />
        <List />
    </>)
}

function myName(params) {
    let Name = 'My name is TinTin';
    return Name;
}

function add(a,b){
    let sum = a + b;
    return sum;
}

function minus(a,b){
    let subdtraction = a - b;
    return subdtraction;
}

function multply(a,b){
    let multplication = a * b;
    return multplication;
}

function divide(a,b){
    let divident = a / b;
    divident = divident.toFixed(2);
    return divident;
}

export default App;
export {myName , add , minus , multply , divide} 