import React from 'react';
import {StyledMenuAndScheduleHeader, StyledMenu, StyledElementOfMenu} from "./menuAndScheduleHeader.style";


export const MenuAndScheduleHeader = () => {
	return(
		<StyledMenuAndScheduleHeader>
			<p>Время работы: 09:00 - 21:00</p>
			<StyledMenu>
				<li><a href="#"><StyledElementOfMenu>Главная</StyledElementOfMenu></a></li>
				<li><a href="#"><StyledElementOfMenu>Меню</StyledElementOfMenu></a></li>
				<li><a href="#"><StyledElementOfMenu>О нас</StyledElementOfMenu></a></li>
				<li><a href="#"><StyledElementOfMenu>Доставка</StyledElementOfMenu></a></li>
				<li><a href="#"><StyledElementOfMenu>Контакты</StyledElementOfMenu></a></li>
			</StyledMenu>
		</StyledMenuAndScheduleHeader>
	)
}