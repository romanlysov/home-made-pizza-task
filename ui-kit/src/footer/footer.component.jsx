import React, { memo } from 'react';

import {StyledFooter, Phone, Menu, HMV, StyledSocialContainer,StyledSocialLogo,} from './footer.styles'
import {fbImageUrl, VKImageUrl,instImageUrl, twitterImageUrl } from './images';
import {HeaderComponent} from "../header/header.component";

export const FooterComponent = ({children}) => <StyledFooter>
	<Phone>
		<span>8-800-555-35-35 </span>
		<span>8-800-555-35-35 </span>

	</Phone>

	<StyledSocialContainer>
		<StyledSocialLogo href="">
			<img src={VKImageUrl} alt="vk logo" />
		</StyledSocialLogo>
		<StyledSocialLogo href="">
			<img src={instImageUrl} alt="instagram logo" />
		</StyledSocialLogo>
		<StyledSocialLogo href="">
			<img src={fbImageUrl} alt="facebook logo" />
		</StyledSocialLogo>
		<StyledSocialLogo href="">
			<img src={twitterImageUrl} alt="twitter logo" />
		</StyledSocialLogo>
	</StyledSocialContainer>
	<Menu>
		<ul className="Menu">
			<li><a href="">Пиццы</a></li>
			<li><a href="">Напитки</a></li>
			<li><a href="">Доставка</a></li>
			<li><a href="">О нас </a></li>

		</ul>
	</Menu>
	<HMV>
		<span>home made pizza, © 2020</span>
	</HMV>
</StyledFooter>;

export const Footer = memo(FooterComponent);