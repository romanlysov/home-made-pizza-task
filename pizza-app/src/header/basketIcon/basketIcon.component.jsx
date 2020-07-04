import React from 'react';
import {StyledBasketIcon} from "./basketIcon.style";
import {MenuAndScheduleHeader} from "../menuAndScheduleHeader/menuAndScheduleHeader.component";

export function BasketIcon(props) {
	const {onCartIconClick}=props;
	return(
		<StyledBasketIcon onClick={onCartIconClick}/>
	)
}