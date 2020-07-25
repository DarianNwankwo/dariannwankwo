import React, { Component } from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby"

import { useSiteMetadata } from "../../utils";
import navItemData from "../../assets/navItemData.json";


/**
 * Setup for the styled components to be strictly used by the NavigationBar
 */
const NavigationContainer = styled.div`
  position: fixed;
  width: 100%;
  background: #fffcf9;
  border-radius: 2px;
  box-shadow: 0px 1px 10px #999;
  font-size: 1.1em;
  margin-top: 25px;
`

const NavigationHeader = styled.div`
  margin: 0px 50px;
  display: inline-block;
  font-style: normal;
`

const NavigationLink = styled(Link)`
  margin-right: 50px;
  float: right;
  text-decoration: none;
  color: #3c3b3b;
  letter-spacing: .5px;
`

const AlertStyleDiv = styled.div`
  background-color: orange;
  border-radius: 40px;
  width: 120px;
  box-shadow: 0px 1px 5px #999;
  height: 35px;
  transform: translate(-15%, 50%);
  position: absolute;
  z-index: -1;
`

const SelfSpan = styled.span`
  color: #3c3b3b;
`

const DarianSpan = styled.span`
  color: #c3c3c3;
`


/**
* Functional components for the navigation bar
*/
function BuildNavigationLinks(navItemData) {
  const activeStyle = { textDecoration: "underline" };

  const navLinks = navItemData.pageData.map((page, ndx) => {
    let div;
    if (page.style) { div = <AlertStyleDiv />; }
    else div = <div></div>;

    return (
      <NavigationLink
        to={page.slug}
        activeStyle={ page.activeStyle ? activeStyle : {} }
      >
        { div }
        <h3 style={{ fontWeight: "400", textAlign: "center" }}>{page.name}</h3>
      </NavigationLink>
    )
  });

  return navLinks;
}


function NavigationBar() {
  const title = useSiteMetadata().title.split(" ");
  const navigationLinks = BuildNavigationLinks(navItemData);

  return (
    <NavigationContainer>
      <Link to={`/`}>
        <NavigationHeader>
          <h3>
            <SelfSpan>{title[0]}</SelfSpan>
            <DarianSpan>{title[1]}</DarianSpan>
          </h3>
        </NavigationHeader>
      </Link>
      { navigationLinks }
    </NavigationContainer>
  );
}

export default NavigationBar;