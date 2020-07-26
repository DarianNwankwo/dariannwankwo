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
`

const ImageBanner = styled.img`
  width: 100%;
  margin-top: 15%;
`

const PointingDownGraphic = styled.img`
  width: 5%;
  position: fixed;
  bottom: 3%;
  left: 50%;
`

const Container = styled.div`
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
  ].map(c => (
    <div style={{marginBottom: "10%"}}><Card svg={c.svg} text={c.text} link={c.link} width={c.width} /></div>
  ));

  return (
    <Container>
      <HeaderPaddingContainer>
        <CenteredContainer>
          <h1>Darian Nwankwo</h1>
          <p>Passionately pursuing computer science and math. I happen to be a PhD student <a href="http://cs.cornell.edu/~don">@CornellCS</a> too...</p>
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