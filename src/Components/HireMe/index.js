import React from "react";
import styled from "styled-components";

import { OffsetContainer } from "../Layout/offset";
import "./styles.css";


const ParentContainer = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`

const ChildContainer = styled.div`
  color: #EFA650;
  font-size: 2em;
  text-align: center;
  z-index: 1;
  // border: 2px solid red;
`

function HireMePage() {
  return (
    <ParentContainer>
      <ChildContainer>
        <h1 style={{ fontWeight: "400" }}>Contact Me</h1>
        <a class="resp-sharing-button__link" href="https://www.linkedin.com/in/darian-nwankwo-19b6711b4/" target="_blank" rel="noopener" aria-label="">
          <div class="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" /></svg>
          </div>
          </div>
        </a>
      </ChildContainer>
    </ParentContainer>
  );
}


export default HireMePage;