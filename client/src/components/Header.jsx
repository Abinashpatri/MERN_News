import React from "react";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background: black;
  height: 65px;
`;
const MenuIcon = styled(Menu)`
  color: White;
`;
const Logo = styled(Typography)`
    height: 75;
    margin: auto;
    paddingRight: 70;
    font-size: 32px;
    font-weight: bold;
    `;


const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <StyledHeader position="static">
      <Toolbar>
        <MenuIcon />
        <Logo>News Hour.</Logo>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
