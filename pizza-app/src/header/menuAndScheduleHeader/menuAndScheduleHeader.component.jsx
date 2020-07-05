import React from 'react';
import {StyledMenuAndScheduleHeader, Menu, ElementOfMenu,StyledOfTime} from "./menuAndScheduleHeader.style";


export const MenuAndScheduleHeader = () => {
	return(
		<StyledMenuAndScheduleHeader>
			<StyledOfTime>Время работы: 09:00 - 21:00</StyledOfTime>
			<Menu>
				<ElementOfMenu href="#">Главная</ElementOfMenu>
				<ElementOfMenu href="#menu">Меню</ElementOfMenu>
				<ElementOfMenu href="#">О нас</ElementOfMenu>
				<ElementOfMenu href="#delivery">Доставка</ElementOfMenu>
				<ElementOfMenu href="#">Контакты</ElementOfMenu>
			</Menu>
		</StyledMenuAndScheduleHeader>
	)
}