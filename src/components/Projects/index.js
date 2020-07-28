import React, { Component } from "react";
import styled from "styled-components";


const ProjectsContainer = styled.div`
  border: 2px solid red;
  position: absolute;
  height: 92%;
  width: 100%;
  display: flex;
`

const style1 = {
  flex: "1 1 auto",
  flexGrow: "0",
  border: "2px solid pink"
}

const style2 = {
  flex: "10 10 auto",
  border: "2px solid pink"
}

const style3 = {
  flex: "1 1 auto",
  flexGrow: "0",
  border: "2px solid pink"
}


class ProjectsPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ProjectsContainer>
        <h1 style={style1}>Projects Page</h1>
        <h1 style={style2}>Projects Page</h1>
        <h1 style={style1}>Projects Page</h1>
        <h1 style={style2}>Projects Page</h1>
        <h1 style={style3}>Projects Page</h1>
      </ProjectsContainer>
    )
  }
}


export default ProjectsPage;