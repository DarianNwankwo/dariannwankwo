import React from "react";

import MobileLayout from "../Components/Layout/mobile.js";
import NavigationBar from "../Components/NavigationBar";
import MobileNavigationBar from "../Components/NavigationBar/mobile.js";
import { MediaContextProvider, Media } from "../Media";
import { OffsetContainer } from "../Components/Layout/offset.js";



export default () => {
  return (
    <MediaContextProvider>
      <Media greaterThan="md">
        <NavigationBar />
        <OffsetContainer>
          <h1>About your boy!</h1>
        </OffsetContainer>
      </Media>
    </MediaContextProvider>
  )
}