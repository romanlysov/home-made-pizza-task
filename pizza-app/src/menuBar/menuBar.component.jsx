import React from "react";
import {StyledMenuBar} from "./menuBar.style";
import {closedPizzaIcon, openPizzaIcon, drinksIcon} from "./images";
import {MenuButton} from "./menuButton.component";

export const MenuBar = () => <StyledMenuBar>
	<MenuButton background={closedPizzaIcon} />
	<MenuButton background={openPizzaIcon} />
	<MenuButton background={drinksIcon} />
</StyledMenuBar>;