import styled from "styled-components";
import {cartCloseIcon} from "./images";

export const StyledCart= styled.div`
	width: 70%;
	height: 70%;
	background: #8A5C0E;
	border-radius: 10px;
	padding: 45px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	
`;

export const StyledCartLeftBlock = styled.div`
	background: #F9F0DC;
	width: 55%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-begin;
	align-items: center;
	/* padding: 15px; */
`;

export const StyledCartRightBlock = styled.div`
	background: #F9F0DC;
	width: 30%;
	height: 80%;
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

export const StyledSubmitButton = styled.button`
	height: 20px;
	width: 100px;
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
	width: 100%;
	height: 100px;
	border-radius: 10px;
	border-style: none none solid;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const StyledItemIcon=styled.div`
	width: 20%;
	height: 90%;
	background: grey;
`;

export const StyledItemInfo=styled.div`
	width: 60%;
	height: 90%;
	background: grey;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
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