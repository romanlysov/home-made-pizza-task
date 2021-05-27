import React from 'react';
import {StyledMenuAndScheduleHeader, Menu, ElementOfMenu,StyledOfTime} from "./menuAndScheduleHeader.style";


export const MenuAndScheduleHeader = () => {
	return(
		<StyledMenuAndScheduleHeader>
			<StyledOfTime id="schedule_time">Время работы: 09:00 - 21:00</StyledOfTime>
			<Menu>
				<a id = "main_page_shortcut" href="#"><ElementOfMenu >Главная</ElementOfMenu></a>
				<a id = "menu_shortcut" href="#menu"><ElementOfMenu>Меню</ElementOfMenu></a>
				<a id = "about_shortcut" href="#about"><ElementOfMenu>О нас</ElementOfMenu></a>
				<a id = "delivery_shortcut" href="#delivery"><ElementOfMenu>Доставка</ElementOfMenu></a>
				<a id = "contacts_shortcut" href="#contacts"><ElementOfMenu>Контакты</ElementOfMenu></a>
			</Menu>
		</StyledMenuAndScheduleHeader>
	)
}