import React, { Component } from "react";
import styled from "styled-components";

import ArrowSvg from "../../static/arrow.svg";
import PlaceholderImage from "../../static/placeholder.png";
// import PlaceholderImage from "../../static/me_2.jpg";
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

const LeftArrowContainer = styled.div`
  // border: 2px solid pink;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`

const RightArrowContainer = styled.div`
  // border: 2px solid pink;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%) rotate(180deg);
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
  flex-basis: 1px;
  align-items: center;
`

const ShowAllContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  // border: 2px solid pink;
`

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  margin: 0 auto;
  display: block;
  // border: 2px solid green;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 8px 16px 0 rgba(255, 165, 0, 0.5);
  }
`



class ProjectsPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ProjectsContainer>
        <LeftArrowContainer>
          <img src={ArrowSvg} />
        </LeftArrowContainer>
        <ImageContainer>
          <Image src={PlaceholderImage} />
        </ImageContainer>
        <ShowAllContainer></ShowAllContainer>
        <ProjectDescriptionContainer>
          <Card width="80%" />
        </ProjectDescriptionContainer>
        <RightArrowContainer>
          <img src={ArrowSvg} />
        </RightArrowContainer>
      </ProjectsContainer>
    )
  }
}


export default ProjectsPage;