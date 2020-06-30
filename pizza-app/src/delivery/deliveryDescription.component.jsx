import React from "react";
import {StyledDeliveryDescription} from "./deliveryDescription.style";
import {Map} from "./map/map.component";

export const DeliveryDecription = () =>
	<StyledDeliveryDescription>
		<Map />
		<div>
			<ul>
				<li>Доставка в пределах 30 минут</li>
				<li>Оплата наличными или по карте</li>
				<li>Крупная зона доставки</li>
				<li>Оплата при получении</li>
			</ul>
		</div>
	</StyledDeliveryDescription>;