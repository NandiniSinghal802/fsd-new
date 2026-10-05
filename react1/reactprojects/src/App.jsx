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
