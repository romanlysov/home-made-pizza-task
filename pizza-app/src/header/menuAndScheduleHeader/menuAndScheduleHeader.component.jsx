import React from 'react';
import {StyledMenuAndScheduleHeader, Menu, ElementOfMenu,StyledOfTime} from "./menuAndScheduleHeader.style";


export const MenuAndScheduleHeader = () => {
	return(
		<StyledMenuAndScheduleHeader>
			<StyledOfTime>Время работы: 09:00 - 21:00</StyledOfTime>
			<Menu>
				<a href="#"><ElementOfMenu >Главная</ElementOfMenu></a>
				<a href="#menu"><ElementOfMenu>Меню</ElementOfMenu></a>
				<a href="#about"><ElementOfMenu>О нас</ElementOfMenu></a>
				<a href="#delivery"><ElementOfMenu>Доставка</ElementOfMenu></a>
				<a href="#contacts"><ElementOfMenu>Контакты</ElementOfMenu></a>
			</Menu>
		</StyledMenuAndScheduleHeader>
	)
}