import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 120px;
  background-color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  
`
export const StyledHeaderLogo = styled.div`
  background-image: url("./images/logo.svg");
  width: 140px;
  height: 120px;
`
export const Menu = styled.div`
  width: 578px;
  height: 36px;
   ul {
    list-style: none;
    margin: 0 auto;
  }
  a {
    color: black;
    text-decoration: none;
    font-family: 'Lora', serif;
    transition: .5s linear;
  }
  li {
    display: inline;
    margin-right: 32.8px;
    height: 36px;
  }
  `
export const Phone = styled.div`
width: 288px;
height: 36px;
  color: #9B5900;
`
export const WorkTime = styled.div`
  width: 288px;
  height: 36px;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  color: #9B5900;
`
export const Basket = styled.div`
  gap: 8px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 200px;
  height: 50px;
  background-color: #ffff;
  color: black;
  text-decoration: none;
  border: 1px solid #9B5900;
  box-sizing: border-box;
  border-radius: 20px;
  
`
export const Circle = styled.div`
  text-align: center;
  border-radius: 100%;
  width: 27.21px;
  height: 26px;
  font-size: 12px;
  color: #9B5900;
  line-height: 30px;
  background: #FFD3A1;
`

export const Count = styled.div`
  height: 18.08333396911621px;
  width: 6.940025329589844px;
`;