import React from "react";

import MobileLayout from "../Components/Layout/mobile.js";
import NavigationBar from "../Components/NavigationBar";
import MobileNavigationBar from "../Components/NavigationBar/mobile.js";
import HomePage from "../Components/Home";
import MobileHomePage from "../Components/Home/mobile.js";
import { MediaContextProvider, Media } from "../Media";
import { OffsetContainer } from "../Components/Layout/offset.js";


export default () => (
  <MediaContextProvider>
    <Media greaterThan="md">
      <NavigationBar />
      <OffsetContainer>
        <HomePage />
      </OffsetContainer>
    </Media>
    <Media lessThan="lg">
      <MobileLayout>
        <MobileNavigationBar />
        <MobileHomePage />
      </MobileLayout>
    </Media>
  </MediaContextProvider>
);