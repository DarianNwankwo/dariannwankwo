import React from "react";
import styled from "styled-components";


const PaddedMobileLayout = styled.div`
  padding-top: 25px;
`


function MobileLayout({ children }) {
  return (
    <PaddedMobileLayout>
      {children}
    </PaddedMobileLayout>
  );
}


export default MobileLayout;