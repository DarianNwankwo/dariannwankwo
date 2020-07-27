import React from "react";
import styled from "styled-components";

import Card from "../Card";
import DesertSvg from "../../static/desert.svg";
import PointingDownSvg from "../../static/pointing_down.svg";
import CodingSvg from "../../static/coding.svg";
import PencilSvg from "../../static/pencil.svg";
import HumanResourcesSvg from "../../static/human-resources.svg";


const CenteredContainer = styled.div`
  text-align: center;
`

const HeaderPaddingContainer = styled.div`
  padding-top: 20%;
  height: 100vh;
  // border: 2px solid red;
`

const ImageBanner = styled.img`
  width: 100%;
  margin-top: 10%;
`

const PointingDownGraphic = styled.img`
  width: 10%;
  margin: 0 auto;
  margin-top: 30%;
  display: block;
`

const Container = styled.div`
`

const HeaderDescription = styled.p`
  margin-top: 8%;
  padding: 0 10%;
`

const CardContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`


function MobileHomePage() {
  const cards = [
    {svg: CodingSvg, text: "Build.", link: "projects"},
    {svg: PencilSvg, text: "Think.", link: "blog"},
    {svg: HumanResourcesSvg, text: "Hire Me.", link: "hire_me"}
  ].map((c, ndx) => (
    <div key={ndx} style={{marginBottom: "10%"}}><Card svg={c.svg} text={c.text} link={c.link} /></div>
    // <Card svg={c.svg} text={c.text} link={c.link} />
  ));

  return (
    <Container>
      <HeaderPaddingContainer>
        <CenteredContainer>
          <h1>Darian Nwankwo</h1>
          <HeaderDescription>
            Passionately pursuing computer science and math. I happen to be a PhD student <a href="http://cs.cornell.edu/~don">@CornellCS</a> too...
          </HeaderDescription>
        </CenteredContainer>
        <ImageBanner src={DesertSvg} />
        {/* <PointingDownGraphic src={PointingDownSvg} /> */}
      </HeaderPaddingContainer>
      {/* Render card components! */}
      <CardContainer>
        { cards }
      </CardContainer>
    </Container>
  )
}


export default MobileHomePage;