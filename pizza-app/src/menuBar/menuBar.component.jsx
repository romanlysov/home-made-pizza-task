import React from "react";
import {StyledMenuBar} from "./menuBar.style";
import {openPizzaIcon, drinksIcon} from "./images";
import {MenuButton} from "./menuButton.component";

export const MenuBar = () => <StyledMenuBar id="menu">
	<a href="#OpenPizza">
		<MenuButton background={openPizzaIcon} />
	</a>
	<a href="#Drinks">
		<MenuButton background={drinksIcon} />
	</a>
</StyledMenuBar>;