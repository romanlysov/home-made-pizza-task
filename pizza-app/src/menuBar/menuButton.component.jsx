import React from "react";
import {StyledMenuButton} from "./menuButton.style";
// import {closedPizzaIcon, openPizzaIcon, drinksIcon} from "./images";

export function MenuButton(props) {
	const {background} = props;
	return <StyledMenuButton id="menu_shortcut_icon">
		<img src={background} />
	</StyledMenuButton>;
}
