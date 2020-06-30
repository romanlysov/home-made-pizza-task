import React from "react";
import {StyledSiteBlockLabel} from "./siteBlockLabel.style";
// import {deliveryLabel} from "../images";

export function SiteBlockLabel(props){
	const {background}=props;
	return <StyledSiteBlockLabel>
		<img src={background} />
	</StyledSiteBlockLabel>;
}
