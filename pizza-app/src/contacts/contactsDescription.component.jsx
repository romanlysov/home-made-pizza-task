import React from "react";
import {StyledDeliveryDescription, StyledTextBlock, StyledText} from "./contactsDescription.style";
import {Map} from "./map/map.component";

export const ContDecription = () =>
	<StyledDeliveryDescription>
		<Map />
		<div>
			<StyledTextBlock>
				<StyledText>Номер телефона: 8 (800)-ххх-хх-хх</StyledText>
				<StyledText>Адрес: пр-т Победы д. 14</StyledText>
				<StyledText>Время работы: пн-вс, с 09:00 до 21:00</StyledText>
				<StyledText>Эл. ящик: hmpizza@yahoo.com</StyledText>
			</StyledTextBlock>
		</div>
	</StyledDeliveryDescription>;