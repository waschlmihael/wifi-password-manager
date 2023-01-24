import styled from "styled-components";

export const StyledInput = styled.input`
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
`

