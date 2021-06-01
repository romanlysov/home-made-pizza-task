import styled from 'styled-components';

export const StyledFooter = styled.div`
  background-color: #505153;
  padding: 0 19px;
  height: 142px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
export const Phone = styled.div`
  width: 175.12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;

`
export const StyledSocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40px;
  min-width: 80px;
  align-content: flex-start;
`;
export const StyledSocialLogo = styled.a`
  &:first-child {
    margin-bottom: 5px;
  }

  &:nth-child(odd) {
    margin-right: 15px;
  }
`;
export const Menu = styled.div`

  height: 36px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  text-transform: capitalize;
  color: white;

  ul {
    margin: 0 auto;
    list-style: none;

  }

  a {
    text-decoration: none;
    font-family: 'Lora', serif;
    transition: .5s linear;
    color: white;
  }

  li {
    display: inline;
    margin-right: 30.8px;
  }
`
export const HMV = styled.div`

  width: 272.18px;
  height: 36px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  /* identical to box height, or 180% */

  text-transform: uppercase;

  color: #FEB158;
`