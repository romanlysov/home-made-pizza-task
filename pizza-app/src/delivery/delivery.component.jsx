import React from "react";
import {StyledDelivery} from "./delivery.style";
import {SiteBlockLabel} from "../siteBlockLabel/siteBlockLabel.component";
import {deliveryLabel} from "./images";
import {DeliveryDecription} from "./deliveryDescription.component";

export const Delivery = () =>
	<StyledDelivery>
		<SiteBlockLabel background={deliveryLabel} />
		<DeliveryDecription />
	</StyledDelivery>;