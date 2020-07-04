import React from "react";
import {StyledHeader,StyledLogoCompany} from "./header.style";
import {CompanyName} from "./companyName/companyName.component";
import {MenuAndScheduleHeader} from "./menuAndScheduleHeader/menuAndScheduleHeader.component";
import {BasketIcon} from "./basketIcon/basketIcon.component";
import {Logo} from "./logo/logo.component";

export function Header(props){
	console.log("Header props");
	console.log(props);
	const {onCartIconClick} = props;
	return <StyledHeader>
		<StyledLogoCompany>
			<Logo />
			<CompanyName />
		</StyledLogoCompany>
		<MenuAndScheduleHeader />
		<BasketIcon onCartIconClick = {onCartIconClick} />
	</StyledHeader>;


}
