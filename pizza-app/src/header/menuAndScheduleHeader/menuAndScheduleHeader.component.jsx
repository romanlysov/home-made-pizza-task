import React from 'react';
import {StyledMenuAndScheduleHeader, Menu, ElementOfMenu} from "./menuAndScheduleHeader.style";


export const MenuAndScheduleHeader = () => {
	return(
		<StyledMenuAndScheduleHeader>
			<p>Время работы: 09:00 - 21:00</p>
			<Menu>
				<li><a href="#"><ElementOfMenu>Главная</ElementOfMenu></a></li>
				<li><a href="#menu"><ElementOfMenu>Меню</ElementOfMenu></a></li>
				<li><a href="#"><ElementOfMenu>О нас</ElementOfMenu></a></li>
				<li><a href="#delivery"><ElementOfMenu>Доставка</ElementOfMenu></a></li>
				<li><a href="#"><ElementOfMenu>Контакты</ElementOfMenu></a></li>
			</Menu>
		</StyledMenuAndScheduleHeader>
	)
}