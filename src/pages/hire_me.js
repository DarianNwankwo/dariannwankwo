import React from "react";
import styled from "styled-components";

import MobileLayout from "../Components/Layout/mobile.js";
import NavigationBar from "../Components/NavigationBar";
import MobileNavigationBar from "../Components/NavigationBar/mobile.js";
import HireMePage from "../Components/HireMe";
import { MediaContextProvider, Media } from "../Media"


function HireMe() {
  return (
    <MediaContextProvider>
      <Media greaterThan="md">
        <NavigationBar />
      </Media>
      <Media lessThan="lg">
        <MobileLayout>
          <MobileNavigationBar />
        </MobileLayout>
      </Media>
      <HireMePage />
    </MediaContextProvider>
  );
}


export default HireMe;