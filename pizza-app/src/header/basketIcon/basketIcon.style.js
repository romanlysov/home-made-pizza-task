import styled from "styled-components";
import {basketImage} from "../images";
// import {default as basketNonEmpty} from "../images/basketNonEmpty_.png";
import {basketNonEmptyImage} from "./images";

export const StyledBasketIcon = styled.div`
	width: 7.4375%;
	height: 100%;
	${props=>props.basketEmpty?`background: url(${basketImage}) center no-repeat`:`background: url(${basketNonEmptyImage}) center no-repeat`};
	background-size: 100% 100%;
	position:absolute;
	right: 2%;
	cursor:pointer;
`;

