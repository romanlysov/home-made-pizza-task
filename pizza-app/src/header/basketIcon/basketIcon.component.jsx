import React from 'react';
import {StyledBasketIcon} from "./basketIcon.style";
import {MenuAndScheduleHeader} from "../menuAndScheduleHeader/menuAndScheduleHeader.component";

export function BasketIcon(props) {
	const {onCartIconClick, isBasketEmpty}=props;
	return(
		<StyledBasketIcon id="basket_icon" onClick={onCartIconClick} basketEmpty={isBasketEmpty} />
	)
}