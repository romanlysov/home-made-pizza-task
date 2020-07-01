import React from 'react';
import {StyledMenuAndScheduleHeader} from "./menuAndScheduleHeader.style";
import {MainMenu} from "./mainMenu/mainMenu.component";


export const MenuAndScheduleHeader = () => {
	return(
		<StyledMenuAndScheduleHeader>
			<p>Время работы: 09:00 - 21:00</p>
			<MainMenu />
		</StyledMenuAndScheduleHeader>
	)
}