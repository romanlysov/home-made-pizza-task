import React from "react";
import {StyledHeader} from "./header.style";
import {Logo} from "./logo/logo.component";
import {CompanyName} from "./companyName/companyName.component";
import {MenuAndScheduleHeader} from "./menuAndScheduleHeader/menuAndScheduleHeader.component";
import {BasketIcon} from "./basketIcon/basketIcon.component";

export const Header = () => <StyledHeader>
	<Logo />
	<CompanyName />
	<MenuAndScheduleHeader />
	<BasketIcon />
</StyledHeader>;