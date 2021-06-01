import React, {memo} from 'react';
import {StyledBanner, StyledRectangle} from './banner.styles';
import Banner from './image/BannerMain.svg'

export const BannerComponent = ({children}) => (<StyledBanner>
	<StyledRectangle>
		<span>ДОСТАВИМ ПИЦЦУ ИЗ ПЕЧИ ЗА 30 МИНУТ</span>
	</StyledRectangle>
</StyledBanner>);