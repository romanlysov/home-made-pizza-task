import styled from "styled-components";
import {meatPizzaImage} from "./images";

export const StyledItemCard = styled.div`
    border-radius: 28px;
    border: 3px solid #FBE8BF;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 3%;
	width: 300px;
	height: 400px;
	background: #F9F0DC;
`;
export const StyledPizza = styled.div`
	width: 200px;
    height: 200px;
    flex: auto;
    margin-left: auto;
    margin-right: auto;
    background: url(${meatPizzaImage}) center no-repeat;
    background-size: 100%;
`;
export const StyledSubMenuOfPizza = styled.div`
    margin-left: 5%;
    margin-bottom: 5%;
`;
export const StyledNameOfPizza = styled.div`
    font-weight: bold;
    font: normal 120% 'trebuchet ms', sans-serif;
`;
export const StyledStructureOfPizza = styled.div`
    width: 90%;
    font: normal 100% 'trebuchet ms', sans-serif;
    color: #615C5B;
`;
export const StyledNutritionalValueOfPizza = styled.div`
    color: #615C5B;
    font: normal 100% 'trebuchet ms', sans-serif;
    font-weight: bold;
    flex:left;
    width: 80%;
`;
export const StyledPrice = styled.div`
    font-weight: bold;
    font-size: 130%;
    width:70px;
    margin-left:20px;
`;

export const StyledBuyButton=styled.button`
	background: #CCBCBC;
	height: 28px;
	width: 100px;
	border: 2px solid #BCACAC;
	border-radius: 12px;
	cursor:pointer;
	margin-left: 60px;
`;
export const StyledButtonText=styled.button`
	font: normal 100% 'trebuchet ms', sans-serif;
	font-weight: bold;
	background-color: #CCBCBC;
	margin: auto;
	border: none;
`;
export const StyledPriceLine=styled.button`
    border: none;
    background-color: #F9F0DC;
    display:flex;
`;