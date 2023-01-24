import styled from "styled-components";

import background from "../../../graphic/background.png"

export const StyledBanner = styled.main`
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
  top: ${({theme}) => theme.nav__height};
  left: 0;
  bottom: 0;
  right: 0;
  height: calc(100vh - ${({theme}) => theme.nav__height});
  background-image: ${({theme}) => theme.color__linear_gradient_bg};

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 37px;
    text-align: center;
    max-width: 500px;
    padding: 0 1.125rem 1em 1.125rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`
export const BackgroundGraphic = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.15;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`

export const FlexBox = styled.div`
  display: flex;
  width: min(500px, 80%);
`

export const TelephoneForm = styled.form`
  display: flex;
  width: min(500px, 80%);

  .PhoneInput {
    width: 100%;
  }

  input {
    font-size: 18px;
    padding: 10px;
    background: ${({theme}) => theme.color__light_gray};
    border-radius: 10px;
    border-color: #6868683B;
    border-width: 1px;
    width: 100%;

    ::placeholder {
      color: ${({theme}) => theme.color__dark_gray};
    }
  }
`

export const ErrorMessage = styled.span`
  color: ${({theme}) => theme.color__orange};
  font-size: 1rem;
  font-weight:bold;
  text-align: center;
  margin-top: 0.7em;
  transition: opacity .5s linear;
  transform-origin: top left;
  opacity: 0;

  &.display {
    opacity: 1;
  }

`