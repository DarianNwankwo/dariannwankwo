import React from "react";
import styled from "styled-components";


const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  // box-shadow: 0 4px 8px 0 rgba(255, 165, 0, 0.2);
  transition: 0.3s;
  width: 23%;
  height: 500px;
  border-radius: 5px;
  background-color: #fffcf9;

  &:hover {
    box-shadow: 0px 8px 16px 0 rgba(255, 165, 0, 0.5);
  }
`;

const Container = styled.div`
  padding: 2px 16px;
  overflow-wrap: break-word;
`;

const svgStyle = {
  width: "50%",
  margin: "0 auto",
  display: "block",
  transform: "translateY(50%)",
};

const textStyle = {
  marginTop: "50%",
  textAlign: "center",
  fontSize: "2.5em",
  fontWeight: "200"
};


function Card({svg, text}) {
  return (
    <StyledCard>
      <img src={svg} style={svgStyle} />
      <Container>
        <h3 style={textStyle}>{text}</h3>
      </Container>
    </StyledCard>
  )
}


export default Card;