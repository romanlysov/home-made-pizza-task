import React from "react";
import {StyledContentBlock} from "./contentBlock.style";
import {SiteBlockLabel} from "../siteBlockLabel/siteBlockLabel.component";
import {FourItemsBlock} from "./fourItemsBlock.component";
// import {StyledFourItemsBlock} from "./fourItemsBlock.style";
import {openPizzaLabelImage} from "./images";

export function ContentBlock(props) {
	const {labelImage, items}=props;
	return <StyledContentBlock>
		<SiteBlockLabel background={labelImage}/>
		<FourItemsBlock items={items}/>
	</StyledContentBlock>;
}