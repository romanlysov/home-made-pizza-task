import styled from "styled-components";
import {meatPizzaImage} from "./images";

export const StyledItemCard = styled.div`
    border-radius: 28px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 3%;
	margin-right: 3%;
	width: 30%;
	height: auto;
	background: #F9F0DC;
`;
export const StyledPizza = styled.div`
	width: 200px;
    height: 200px;
    flex: auto;
    margin-left: auto;
    margin-right: auto;
    background: url(${meatPizzaImage}) center no-repeat;
    background-size: 90% 90%;
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
`;
export const StyledBottom = styled.div`
`;

export const StyledBuyButton=styled.button`
	background: red;
	height: 28px;
	width: 100px;
	border-style: none;
`