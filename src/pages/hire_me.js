import React from "react";
import NavigationBar from "../components/NavigationBar";


const centerStyle = {
  textAlign: "center",
  paddingTop: "20%"
}


function HireMe() {
  return (
    <div>
      <NavigationBar />
      <div style={centerStyle}>
        <h1>If you got that work, I need that work!</h1>
        <p>Still working on it...</p>
      </div>
    </div>
  )
}


export default HireMe;