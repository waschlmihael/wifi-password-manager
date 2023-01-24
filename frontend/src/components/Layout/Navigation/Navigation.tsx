import React from 'react';
import styled from "styled-components";
import SrcLogo from "../../Icons/SrcLogo";

const Navigation = () => {
    return (
        <StyledNavigation>
            <SrcLogoStyled />
        </StyledNavigation>
    );
};

export default Navigation;

const StyledNavigation = styled.nav`
  background-image: ${({theme}) => theme.color__linear_gradient_nav};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 40px 0px rgb(0 0 0 / 16%);
  z-index: 99;
  padding: 10px 20px 10px 20px;
  height: ${({theme}) => theme.nav__height};
`

const SrcLogoStyled = styled(SrcLogo)`
    padding: 10px;
`