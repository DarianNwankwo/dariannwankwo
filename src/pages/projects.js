import React from "react";
import NavigationBar from "../components/NavigationBar";


const centerStyle = {
  textAlign: "center",
  paddingTop: "20%"
}

function Projects() {
  return (
    <div>
      <NavigationBar />
      <div style={centerStyle}>
        <h1>Software...I BUILD THAT!!!</h1>
        <p>Still working on it...</p>
      </div>
    </div>
  )
}


export default Projects;