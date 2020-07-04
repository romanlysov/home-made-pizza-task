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
	justify-content: space-around;
	align-items: center;
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
`