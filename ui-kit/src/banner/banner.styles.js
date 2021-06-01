import styled from "styled-components";
import BM from './image/BannerMain.svg';

export const StyledBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: url(${BM}) no-repeat;
  width: 1506.94px;
  height: 260px;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;

`
export const StyledRectangle = styled.div`

  position: absolute;
  left: 61.79px;
  top: 85.79px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 188, 99, 0.5);
  border-radius: 20px;
  width: 446.11px;
  height: 102.42px;
  color: white;
  text-decoration: none;
  box-sizing: border-box;
`