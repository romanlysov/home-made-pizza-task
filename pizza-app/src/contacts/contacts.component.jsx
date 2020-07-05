import React from "react";
import {StyledContact} from "./contacts.style";
import {ContDecription} from "./contactsDescription.component";
import {SiteBlockLabel} from "../siteBlockLabel/siteBlockLabel.component";
import {contactLogo} from "./images";

export const Contacts = () =>
	<StyledContact>
		<SiteBlockLabel background={contactLogo} />
		<ContDecription />
	</StyledContact>;