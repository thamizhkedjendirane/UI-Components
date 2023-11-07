import React from "react";

function Toggle() {
    const [showcode,setshowcode]= useState(false);
    const styles={
        toggle:{
          fontSize:"0.7rem",
          borderRadius:"8px",
          border:"none",
          padding:"0.3rem 1rem",
          background:"transparent"
        },
        toggleContainer:{
         
          width:"fit-content",
          background:"#F0F0F0",
          padding:"0.2rem",
          borderRadius:"10px"
        },
        btnactive:{
          background:"#1f2d5c",
          fontSize:"0.7rem",
          borderRadius:"15px",
          border:"none",
          padding:"0.3rem 1rem",
          color:"#fff"
        }
      }
  return (
    <div style={styles.toggleContainer}>
      <button
        style={!showcode ? styles.btnactive : styles.toggle}
        onClick={() => {
          setshowcode(false);
        }}
      >
        Demo
      </button>
      <button
        style={showcode ? styles.btnactive : styles.toggle}
        onClick={() => {
          setshowcode(true);
        }}
      >
        Code
      </button>
    </div>
  );
}

export default Toggle;
