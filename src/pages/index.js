import React from "react";
import styled from "styled-components";

import MobileLayout from "../components/Layout/mobile.js";
import NavigationBar from "../components/NavigationBar";
import MobileNavigationBar from "../components/NavigationBar/mobile.js";
import HomePage from "../components/Home";
import MobileHomePage from "../components/Home/mobile.js";
import { MediaContextProvider, Media } from "../Media";


export default () => (
  <MediaContextProvider>
    <Media greaterThan="md">
      <NavigationBar />
      <HomePage />
    </Media>
    <Media lessThan="lg">
      <MobileLayout>
        <MobileNavigationBar />
        <MobileHomePage />
      </MobileLayout>
    </Media>
  </MediaContextProvider>
);