import React from "react";
import {StyledDelivery} from "./delivery.style";
import {SiteBlockLabel} from "../siteBlockLabel/siteBlockLabel.component";
import {deliveryLabel} from "./images";
import {Map} from "./map/map.component";
import {DeliveryDecription} from "./deliveryDescription.component";

export const Delivery = () =>
	<StyledDelivery>
		<SiteBlockLabel background={deliveryLabel} />
		<DeliveryDecription>
			<Map />
		</DeliveryDecription>
	</StyledDelivery>;