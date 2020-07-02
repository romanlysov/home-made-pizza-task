import React from "react";
import {StyledMenuBar} from "./menuBar.style";
import {closedPizzaIcon, openPizzaIcon, drinksIcon} from "./images";
import {MenuButton} from "./menuButton.component";

export const MenuBar = () => <StyledMenuBar>
	<a href="#ClosedPizza">
		<MenuButton background={closedPizzaIcon} />
	</a>
	<a href="#OpenPizza">
		<MenuButton background={openPizzaIcon} />
	</a>
	<a href="#Drinks">
		<MenuButton background={drinksIcon} />
	</a>
</StyledMenuBar>;