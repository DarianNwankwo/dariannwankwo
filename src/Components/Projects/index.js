import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

import ArrowSvg from "../../static/arrow.svg";
import DropdownSvg from "../../static/dropdown.svg";
import PlaceholderImage from "../../static/placeholder.png";
import Card from "../Card";
import { projectsData } from "./projectsData";


const ProjectsContainer = styled.div`
  // border: 2px solid red;
  position: absolute;
  height: 92%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const LeftPulsate = keyframes`
  0% { left: 10px; }
  50% { left: 13px}
  100% { left: 10px; }
`

const RightPulsate = keyframes`
  0% { right: 10px; }
  50% { right: 13px}
  100% { right: 10px; }
`

const LeftArrowContainer = styled.div`
  // border: 2px solid pink;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: 0.5s;
  animation: ${LeftPulsate} 700ms linear infinite;
`

const RightArrowContainer = styled.div`
  // border: 2px solid pink;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) rotate(180deg);
  transition: 0.5s;
  animation: ${RightPulsate} 700ms linear infinite;
`

const ImageContainer = styled(Link)`
  flex-grow: 5.5;
  flex-shrink: 1;
  // border: 2px solid pink;
  flex-basis: 1px;
  display: flex;
  align-items: center;
`

const ProjectDescriptionContainer = styled.div`
  flex-grow: 5.5;
  flex-shrink: 1;
  // border: 2px solid pink;
  display: flex;
  align-items: center;
  flex-basis: 1px;
`

const ShowAllContainer = styled.div`
  // flex-grow: .5;
  flex-shrink: 1;
  // border: 2px solid pink;
`

const DropDownMenu = styled.img`
  margin: 0 auto;
  display: block;
  width: 50%;
  transition: .5s;

  &:hover {
    width: 55%;
  }
`

const Image = styled.img`
  max-width: 70%;
  // max-height: 80%;
  margin: 0 auto;
  // display: block;
  // border: 2px solid green;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 8px 16px 0 rgba(255, 165, 0, 0.5);
  }
`

const ProjectDescription = styled.div`
  // border: 2px solid blue;
  // background: red;
  margin: 0 auto;
  width: 75%;
  height: 75%;
  overflow: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 8px 16px 0 rgba(255, 165, 0, 0.5);
  }
`

const SpacedDiv = styled.div`
  padding: 2% 5%;
  // display: flex;
  // border: 2px solid red;
`


class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      projects: projectsData.projects,
      activeProject: projectsData.projects[0],
      index: 0,
      dropdownOpen: false
    };
  }
  
  handleArrowClick(increment) {
    let n = this.state.projects.length;
    let direction = increment ? 1 : -1;
    let index = (this.state.index + direction % n + n) % n;
    
    this.setState(prevState => ({
      ...prevState,
      index,
      activeProject: prevState.projects[index]
    }));
    // debugger;
    // alert("Clicked...")
  }

  handleDropdownClick() {
    this.setState(prevState => ({
      ...prevState,
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <ProjectsContainer>
        <LeftArrowContainer onClick={this.handleArrowClick.bind(this, false)}>
          <img src={ArrowSvg} width="75%" alt="left arrow" />
        </LeftArrowContainer>
        <ImageContainer to={ this.state.activeProject.url } >
          {/* <Image src={PlaceholderImage} /> */}
          <Image src={ this.state.activeProject.image } />
        </ImageContainer>
        {/* <ShowAllContainer>
          <DropDownMenu src={DropdownSvg} onClick={this.handleDropdownClick.bind(this)} />
        </ShowAllContainer> */}
        <ProjectDescriptionContainer>
          <ProjectDescription>
            <SpacedDiv>
              <h1>{ this.state.activeProject.title }</h1>
              <p>{ this.state.activeProject.description }</p>
              <h1>Developer Stack && Tools</h1>
              <ul>
                { 
                  this.state.activeProject.stack.map(tag => <li>{tag}</li>)
                }
              </ul>
            </SpacedDiv>
          </ProjectDescription>
        </ProjectDescriptionContainer>
        <RightArrowContainer onClick={this.handleArrowClick.bind(this, true)}>
          <img src={ArrowSvg} width="75%" alt="right arrow" />
        </RightArrowContainer>
      </ProjectsContainer>
    )
  }
}


export default ProjectsPage;