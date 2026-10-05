import React from "react";

const Student = (props) => {
  return (
    <div style={{ border: "2px solid red", height: "300px", width: "300px" }}>
      <h3 style={{ color: "red" }}>Student ID Card</h3>
      <img
        src="https://i.pinimg.com/564x/a5/68/d8/a568d8cb3e31412fea4f13250309989f.jpg"
        alt=""
        height={"150px"}
        width={"150px"}
      />
      <h2>{props.name}</h2>
      <h3>class 5</h3>
      <h3>roll no:{props.roll}</h3>
    </div>
  );
};

export default Student;
