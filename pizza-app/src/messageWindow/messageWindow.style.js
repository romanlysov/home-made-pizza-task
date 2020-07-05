import styled from "styled-components";

export const StyledMessageWindow= styled.div`
	width: 40%;
	height: 40%;
	background: #8A5C0E;
	border-radius: 10px;
	padding: 45px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;	
`;

export const StyledButtonBlock = styled.div`
	width: 80%;
	height: 20%;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const StyledMessageBlock = styled.div`
	width: 80%;
	height: 70%;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;	
	align-items: center;
`;

export const StyledCloseMessageWindowButton=styled.button`
	background: transparent;
	height: 28px;
	width: 28px;
	margin-top: -35px;
	border-style: none;
`;