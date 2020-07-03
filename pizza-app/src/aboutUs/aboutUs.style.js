import styled from "styled-components";
import {aboutUsHandsImage} from "./images";

export const StyledAboutUs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 5%;
	/*margin-right: 5%;*/
	width: 80%;
	margin-bottom: 50px;
`;

export const StyledAboutUsInnerContainer = styled.div`
	display:flex;
	flex-direction: row;
	justify-content: space-between;
	
	align-items: center;
	width: 100%;
`;

export const StyledAboutUsHandsImage = styled.div`
	height: 404px;
	width: 25%; 
	display: block;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
	background: url(${aboutUsHandsImage}) no-repeat;
    background-size: 100%;
`;

export const StyledAboutUsDescription = styled.div`
	height: 304px;
	width: 60%;
	display: block;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
	background: #F9F0DC;
    background-size: 100%;
    padding: 45px;
    border-radius: 10px;
	
	color: rgb(97, 21, 91);
    font: normal 130% 'trebuchet ms', sans-serif;
    color: black;
    text-decoration: none;
    font-size: 150%;
    font-weight: 900;
`