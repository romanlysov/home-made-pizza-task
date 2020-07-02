import React from "react";
import {StyledAboutUs, StyledAboutUsInnerContainer, StyledAboutUsHandsImage, StyledAboutUsDescription} from "./aboutUs.style";
import {aboutUsLabelImage, aboutUsHandsImage} from "./images";
import {SiteBlockLabel} from "../siteBlockLabel/siteBlockLabel.component";

export const AboutUs = () => {
	return <StyledAboutUs>
		<SiteBlockLabel background={aboutUsLabelImage}/>
		<StyledAboutUsInnerContainer>
			<StyledAboutUsHandsImage />
			<StyledAboutUsDescription>
				<p>Наше призвание - готовка, поэтому...</p>
			</StyledAboutUsDescription>
		</StyledAboutUsInnerContainer>
	</StyledAboutUs>;
}