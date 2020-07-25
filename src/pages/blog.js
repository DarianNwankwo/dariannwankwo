import React from "react";
import NavigationBar from "../components/NavigationBar";


const centerStyle = {
  textAlign: "center",
  paddingTop: "20%"
}


function Blog() {
  return (
    <div>
      <NavigationBar />
      <div style={centerStyle}>
        <h1>Words...I write that!</h1>
        <p>Still working on it...</p>
      </div>
    </div>
  )
}


export default Blog;