import React from  "react";
import styled from "styled-components";

import Card from "../Card";
import CodingSvg from "../../static/coding.svg";
import PencilSvg from "../../static/pencil.svg";
import HumanResourcesSvg from "../../static/human-resources.svg";


// (TODO): Fix element positioning for different size cards. The text goes outside of the container, but
// should be maintained in it.

/**
 * Setup for the styled components to be strictly used by the HomePage
 */
const CenteredText = styled.div`
  text-align: center;
`

const StyledHeader = styled.h1`
  font-weight: 700;
  letter-spacing: .5em;
  margin-top: 3%;
  margin-bottom: -3px;
`

const Description = styled.p`
  margin-top: -5px;
  font-weight: 400;
  font-size: 1.3em;
`

const Container = styled.div`
  margin: 4% 15%;
  display: flex;
  justify-content: space-evenly;
`

const Separator = styled.hr`
  border-top: 2px solid orange;
  width: 35%;
`


/**
 * HomePage functional component. Combines several styled components to generate the
 * home page.
 */
function HomePage() {
  const cards = [
    {svg: CodingSvg, text: "Build.", link: "projects", width: "23%"},
    {svg: PencilSvg, text: "Think.", link: "blog", width: "23%"},
    {svg: HumanResourcesSvg, text: "Hire Me.", link: "hire_me", width: "23%"}
  ].map(c => (
    <Card svg={c.svg} text={c.text} link={c.link} width={c.width} />
  ));

  return (
    <div>
      <CenteredText>
        <StyledHeader>Darian Nwankwo</StyledHeader>
        <Separator />
        <Description>
          forgive my tactlessness, i'm much better at maths. <br />
          pending: phd student <a href="https://www.cs.cornell.edu/~don/">@CornellCS 🙇🏾‍♂️</a>
        </Description>
      </CenteredText>
      <Container>
        { cards }
      </Container>
    </div>
  );
}


export default HomePage;