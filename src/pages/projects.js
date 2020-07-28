import React from "react";

import MobileLayout from "../Components/Layout/mobile.js";
import NavigationBar from "../Components/NavigationBar";
import MobileNavigationBar from "../Components/NavigationBar/mobile.js";
import ProjectsPage from "../Components/Projects";
import MobileProjectsPage from "../Components/Projects/mobile.js";
import { MediaContextProvider, Media } from "../Media";
import { OffsetContainer } from "../Components/Layout/offset.js";


export default () => (
  <MediaContextProvider>
    <Media greaterThan="md">
      <NavigationBar />
      <OffsetContainer>
        <ProjectsPage />
      </OffsetContainer>
    </Media>
    <Media lessThan="lg">
      <MobileLayout>
        <MobileNavigationBar />
        <MobileProjectsPage />
      </MobileLayout>
    </Media>
  </MediaContextProvider>
);