import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 30px;
  font-weight: 400;
  font-size: 1.125rem;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 10%);
  fill: ${({theme}) => theme.color__white};
  color: ${({theme}) => theme.color__white};
  background-color: ${({theme}) => theme.color__orange};
  padding: 0.70em 3em;
  border: none;
  margin: 1.25rem 0;
  transition: ${({theme}) => theme.transition__default};

  .split {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: .6rem;
    }
  }

  &:hover {
    background-color: ${({theme}) => theme.color__primary};
    transform: scale(1.01);
  }
  
  &:disabled {
    background-color: ${({theme}) => theme.color__dark_gray};
    color: ${({theme}) => theme.color__light_gray};
  }
`