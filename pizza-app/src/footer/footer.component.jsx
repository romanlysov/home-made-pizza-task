import React from "react";
import {StyledFooter, StyledLeftFooterBlock, StyledRightFooterBlock,
	StyledSocialNetIcon, StyledSocialNetsBlock, StyledSupportContactsBlock} from "./footer.style";
import {StyledSiteBlockLabel} from "../siteBlockLabel/siteBlockLabel.style";
import {facebookIcon, instagramIcon, twitterIcon, vkIcon} from "./images";

function SocialNetIcon(props){
	const {background}=props;
	return <StyledSocialNetIcon>
		<img src={background} />
	</StyledSocialNetIcon>;
}

export const Footer = () => <StyledFooter>
	<StyledLeftFooterBlock>
		<p>@HomeMadePizza</p>
	</StyledLeftFooterBlock>
	<StyledRightFooterBlock>
		<StyledSocialNetsBlock>
			<SocialNetIcon background = {facebookIcon}/>
			<SocialNetIcon background = {twitterIcon}/>
			<SocialNetIcon background = {vkIcon}/>
			<SocialNetIcon background = {instagramIcon}/>
		</StyledSocialNetsBlock>
		<StyledSupportContactsBlock>
			<p>Поддержка: 8 (800)-xxx-xx-xx</p>
		</StyledSupportContactsBlock>
	</StyledRightFooterBlock>
</StyledFooter>;