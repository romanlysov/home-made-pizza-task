import React from 'react';
import {StyledMainMenu} from "./mainMenu.style";

export const MainMenu = () => {
	return(
		<StyledMainMenu>
			<a>Главная</a>
			<a href="#menu">Меню</a>
			<a>О нас</a>
			<a href="#delivery">Доставка</a>
			<a>Контакты</a>
		</StyledMainMenu>
	)
}