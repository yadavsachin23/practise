import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {myName , add , minus , multply , divide} from './App';


const fname = "Sachin"
const lname = "Yadav"

ReactDOM.render(
  
  /* <div> IT WILL SHOW THIS DIV IN MAIN DIV OF OUR HTML 
     <h1>OOPS!!! You Got it Right. Without Any Problem.🐵</h1>
     <p>We Can't took two JSX element in render method...!!<br></br>For that we need to wrapped inside one element</p>
     <h2>Aaya Maza</h2>
   </div>, */


  // BY USING ARRAY[]

  /* [ // we can also wrapped element using an array
       <h1>OOPS!!! You Got it Right. Without Any Problem.🐵</h1>,
       <p>We Can't took two JSX element in render method...!!<br></br>For that we need to wrapped inside one element</p>,
       <h2>Aaya Maza</h2>,
     ], */

  // BY USING React.Fragment Method
  /*  <React.Fragment> 
    <h1>OOPS!!! You Got it Right. Without Any Problem.🐵</h1>
    <p>We Can't took two JSX element in render method...!!<br></br>For that we need to wrapped inside one element</p>
    <h2>Aaya Maza</h2>
  </React.Fragment>, */

     // IN REPLACE OF ALL WE CAN ONLY USE (<> OUR JSX </>) THIS SYMBOLS

     <>
     <App />
     <h2> {myName()} </h2>
     <ul>
     <strong>Basic Mathematical Operations</strong>
      <li> {add(50 , 25)} </li>
      <li> {minus(50 , 25)} </li>
      <li> {multply(50 , 25)} </li>
      <li> {divide(50 , 25)} </li>
     </ul>
       <h1>This is Top Web Series Of India..</h1>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
       <ol type="A" start="1">
         <li>Sacred Games</li>
         <li>Patal Lok</li>
         <li>The Family Man</li>
         <li>Panchayat</li>
         <li>Special Ops</li>
       </ol>
       {/* {/* Gettin the name using expression  */}
       <h1>My Name is {fname}</h1>
       <h1>My Name is {fname +" "+lname}</h1>
       <h1>{`My First Name is ${fname} My Last Name is ${lname}`}</h1>
       {/* we can use mathematical expression without any function or anything else  */}
       <p>Sum of two number is {2 + 3}</p> 
       <p>Multplication of two number is {14 * 15}</p> 
       <p>Generating random number {Math.random()}</p> 
       <p>Getting PI Value {Math.PI}</p> 
     </>,


document.getElementById('root')
);



// OUR BROWSER SEE LIKE THIS BABEL CONVERT OUR CODE TO READ BY BROWSER
// ReactDOM.render( /*#__PURE__*/React.createElement("h1", 
// null, 
// "OOPS!!! You Got it Right. Without Any Problem"), 
// document.getElementById('root'));


// USING JAVASCRIPT
// let h1 = document.createElement("h1");
// h1.innerHTML = "Kyu bhyi..!!! AA rha hai Maza...??";
// document.getElementById("full").appendChild(h1);