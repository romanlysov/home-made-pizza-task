import React from "react";
import {StyledDeliveryDescription, StyledTextBlock, StyledText} from "./deliveryDescription.style";
import {Map} from "./map/map.component";

export const DeliveryDecription = () =>
	<StyledDeliveryDescription>
		<Map />
		<div>
			<StyledTextBlock>
				<StyledText>Доставка в пределах 30 минут</StyledText>
				<StyledText>Оплата наличными или по карте</StyledText>
				<StyledText>Крупная зона доставки</StyledText>
				<StyledText>Оплата при получении</StyledText>
			</StyledTextBlock>
		</div>
	</StyledDeliveryDescription>;