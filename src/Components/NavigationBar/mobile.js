import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

import PlusSvg from "../../static/plus.svg";


const NavigationIcon = styled.div`
  position: fixed;
  top: 3%;
  right: 5%;
  color: #EFA650;
  z-index: 2;
`

const FixedView = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  font-size: 2em;
  font-weight: 500;
  color: black;
  background: #fffcf9;
  top: 0;
  left: 0;
`

const TopLeft = styled(Link)`
  position: inherit;
  top: 3%;
  left: 4%;
  text-decoration: none;
  color: inherit;
`

const TopRight = styled(Link)`
  position: inherit;
  top: 3%;
  right: 4%;
  text-decoration: none;
  color: inherit;
`

const BottomLeft = styled(Link)`
  position: inherit;
  bottom: 3%;
  left: 4%;
  text-decoration: none;
  color: inherit;
`

const BottomRight = styled(Link)`
  position: inherit;
  bottom: 3%;
  right: 4%;
  text-decoration: none;
  color: inherit;
`

const NavigationClose = styled.img`
  color: inherit;
  position: inherit;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`


function activeNavigationView() {
  return (
    <FixedView>
      <TopLeft to={`/`}>home</TopLeft>
      <TopRight to={`/projects`}>projects</TopRight>
      <BottomLeft to={`http://blog.dariannwankwo.com`}>blog</BottomLeft>
      <BottomRight to={`/hire_me`}>hire me</BottomRight>
    </FixedView>
  );
}


class MobileNavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
      })
    );
  }

  render() {
    const hideNav = { display: "none" };

    return (
      <NavigationIcon>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          style={ this.state.isActive ? hideNav : {} }
          onClick={this.handleClick}
        />
        { this.state.isActive ? activeNavigationView() : <div></div>}
        {
          this.state.isActive ?
          <NavigationClose src={PlusSvg} onClick={this.handleClick}></NavigationClose> : <div></div>
        }
      </NavigationIcon>
    );
  }
}


export default MobileNavigationBar;