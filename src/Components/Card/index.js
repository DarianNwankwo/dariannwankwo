import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Media } from "../../Media";


const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  // box-shadow: 0 4px 8px 0 rgba(255, 165, 0, 0.2);
  transition: 0.3s;
  // width: 23%;
  height: 500px;
  border-radius: 5px;
  background-color: #fffcf9;
  // border: 2px solid red;
  overflow: auto;

  &:hover {
    box-shadow: 0px 8px 16px 0 rgba(255, 165, 0, 0.5);
  }
`;

const Container = styled.div`
  // padding: 2px 16px;
  overflow-wrap: break-word;
`;

const MobileContainer = styled.div`
  overflow-wrap: break-word;
`

const StyledLink = styled(Link)`
  // width: 33%;
  text-decoration: none;
  color: inherit;
`

const svgStyle = {
  width: "7vw",
  margin: "0 auto",
  display: "block",
  transform: "translateY(100%)",
};

const mobileSvgStyle = {
  // border: "2px solid black",
  margin: "0 auto",
  marginTop: "calc(15%)",
  display: "block",
  width: "25vw"
}

const textStyle = {
  marginTop: "90%",
  textAlign: "center",
  fontSize: "2.5em",
  fontWeight: "200",
  // border: "2px solid pink"
};

const mobileTextStyle = {
  textAlign: "center",
  fontSize: "2.5em",
  fontWeight: "200",
  // border: "2px solid black",
  // marginTop: "calc(5vh)",
}

/**
 * A card component that leverages Gatsby's link api for generating clickable cards to 
 * direct to different locations on the web app.
 */
function Card({svg, text, link, width, height}) {
  return (
    <StyledLink to={link} style={{ width: width, height: height }}>
      <Media greaterThan="md">
        <StyledCard>
          <img src={svg} style={svgStyle} />
          <Container>
            <h3 style={textStyle}>{text}</h3>
          </Container>
        </StyledCard>
      </Media>
      <Media lessThan="lg">
        <StyledCard>
          <img src={svg} style={mobileSvgStyle} />
          <MobileContainer>
            <h3 style={mobileTextStyle}>{text}</h3>
          </MobileContainer>
        </StyledCard>
      </Media>
    </StyledLink>
  )
}


export default Card;