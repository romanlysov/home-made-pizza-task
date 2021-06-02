import React, {memo} from 'react';
// eslint-disable-next-line import/named
import {StyledHeader, Menu, Phone, WorkTime, Basket, StyledHeaderLogo, Circle, Count} from './header.styles';
import {logoImageUrl} from './images';
import BasketLogo from './images/Vector.svg'

export const HeaderComponent = ({onModalOpen, cartCount, count}) => (<StyledHeader>
	<StyledHeaderLogo>
		<img src={logoImageUrl} alt=""/>
	</StyledHeaderLogo>
	<Menu>
		<ul className="Menu">
			<li><a href="">Пиццы</a></li>
			<li><a href="">Напитки</a></li>
			<li><a href="">Доставка</a></li>
			<li><a href="">О нас</a></li>
		</ul>
	</Menu>
	<div>
		<Phone>
			<span>8-800-555-35-35</span>
		</Phone>
		<WorkTime>
			<span> Время Работы: <b> 09-21</b></span>
		</WorkTime>
	</div>
	<Basket onModalOpen={onModalOpen} onClick={() => onModalOpen(true)} count={cartCount}>
		<img src={BasketLogo} alt=""/>
		<div>Корзина</div>
		<Circle><Count>{count}</Count></Circle>
	</Basket>
</StyledHeader>
);

export const Header = memo(HeaderComponent);