import styled from 'styled-components';

export const StyledHeading = styled.h2`
  font-family: ${({theme}) => theme.font__heading};
  font-weight: bold;
  font-size: 2.375rem;
  line-height: 1.2;
  margin-bottom: 0.92em;
  color: ${({theme}) => theme.fg};

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  &.bannerHeading {
    font-size: 8.125rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;

    @media screen and (max-width: 1024px) {
      font-size: 6rem;
    }
    
    @media screen and (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;