import React from "react";
import Student from "./components/Student";

const App = () => {
  return (
    <div>
      <h1>STUDENT RECORD</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <Student name="rohit" roll="201" />
        <br />
        <Student name="sonam" roll="205" />
      </div>
    </div>
  );
};

export default App;
import {browerrouter,link,routes,route}from 'react-router-dom'
function home(){
  return <h1>this is my home page</h1>
}
function about(){
  return <h1>this is my about page</h1>
}
function phone(){
  return <h1>this is my phone page</h1> 
}
<routes>
  <route path='/'element
</routes>