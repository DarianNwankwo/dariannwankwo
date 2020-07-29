import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import ArrowSvg from "../../static/arrow.svg";
import DropdownSvg from "../../static/dropdown.svg";
import PlaceholderImage from "../../static/placeholder.png";
import Card from "../Card";


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

const ImageContainer = styled.div`
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
  transition: .1s;

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
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }
  
  handleArrowClick() {
    alert("Clicked...")
  }

  render() {
    return (
      <ProjectsContainer>
        <LeftArrowContainer onClick={this.handleArrowClick}>
          <img src={ArrowSvg} width="75%" />
        </LeftArrowContainer>
        <ImageContainer>
          <Image src={PlaceholderImage} />
        </ImageContainer>
        <ShowAllContainer>
          <DropDownMenu src={DropdownSvg} />
        </ShowAllContainer>
        <ProjectDescriptionContainer>
          <ProjectDescription>
            <SpacedDiv>
              <h1>Project Title</h1>
              <p>
                Project description is right below the project title. It shows this following text because
                I do not want to use lorem ipsum.
              </p>
              <h1>Developer Stack</h1>
              <ul>
                <li>Python</li>
                <li>Javascript</li>
              </ul>
            </SpacedDiv>
          </ProjectDescription>
        </ProjectDescriptionContainer>
        <RightArrowContainer>
          <img src={ArrowSvg} width="75%" />
        </RightArrowContainer>
      </ProjectsContainer>
    )
  }
}


export default ProjectsPage;