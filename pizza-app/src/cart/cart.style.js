import styled from "styled-components";
import {cartCloseIcon} from "./images";
import {meatPizzaImage} from "../contentBlock/images";

export const StyledCart= styled.div`
	width: 70%;
	height: 75%;
	background: #8A5C0E;
	border-radius: 28px;
	padding: 45px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	border: 3px solid #664409;
	
`;

export const StyledCartLeftBlock = styled.div`
	background: #F9F0DC;
	border-radius: 10px;
	border: 3px solid #f2dbaa;
	overflow-y: scroll;
	width: 50%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: flex-begin;
	align-items: center;
	/* padding: 15px; */
`;

export const StyledCartRightBlock = styled.div`
	background: #F9F0DC;
	border-radius: 10px;
	border: 3px solid #f2dbaa;
	width: 35%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const StyledForm = styled.input`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

export const StyledTextInput = styled.input`
	
`;

export const StyledSelectField = styled.select`
	
`;

export const StyledSubmitButton = styled.button`
    margin-top: 10px;
	height: 20px;
        width: 177px;
`;

export const StyledCloseButton=styled.button`
	/* background: url(${cartCloseIcon}) cemnter no-repeat; */
	background: transparent;
	height: 28px;
	width: 28px;
	margin-top: -35px;
	border-style: none;
`;

export const StyledItemBlock=styled.div`
	width: 90%;
	height: 100px;
	border-style: none solid #f2dbaa;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const StyledItemIcon=styled.div`
    flex: auto;
    margin-left: auto;
    margin-right: auto;
    /* background: url(${meatPizzaImage}) center no-repeat; */
    background: url(${props=>props.background}) center no-repeat;
    background-size: 100px 100px;    
	width: 20%;
	height: 90%;
`;

export const StyledItemInfo=styled.div`
	width: 60%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
export const StyledResult=styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
export const StyledLabel=styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const StyledPriceAndButtonsContainer=styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const StyledPrice=styled.div`
	width: 40%;
	display: flex;
	flex-direction: row;
	justify-content: flex-begin;
`;

export const StyledModifyQuantityButtonsBlock=styled.div`
	width: 55%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const StyledModifyButton=styled.div`
	background: transparent;
	height: 31px;
	width: 31px;
	border-style: none;
`;

export const StyledQuantityLabel=styled.div`
	background: white;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	width: 20%;
	height: 31px;
`;

export const StyledItemDeleteButton=styled.button`
	background: transparent;
	height: 28px;
	width: 28px;
	border-style: none;
`;

export const StyledErrorMessage=styled.p`
	font-size: 50%;
	color: red;
`;