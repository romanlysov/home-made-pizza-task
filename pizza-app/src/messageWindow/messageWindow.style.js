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
	width: 100%;
	height: 10%;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const StyledMessageBlock = styled.div`
	width: 100%;
	height: 80%;
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;	
	align-items: center;
	
	font: normal 150% 'trebuchet ms', sans-serif;
	font-weight:bold;
	text-align: center;
`;

export const StyledCloseMessageWindowButton=styled.button`
	background: transparent;
	height: 28px;
	width: 28px;
	margin-top: -35px;
	border-style: none;
`;