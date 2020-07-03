import React from "react";
import {StyledItemCard, StyledPizza, StyledNameOfPizza, StyledNutritionalValueOfPizza, StyledStructureOfPizza, StyledSubMenuOfPizza, StyledPrice} from "./itemCard.style";
import {meatPizzaImage} from "./images";

export function ItemCard(props){
	console.log(props);
	const {item}=props;
	return <StyledItemCard>
		<StyledPizza />
		<StyledSubMenuOfPizza>
			<StyledNameOfPizza>{item.productName}</StyledNameOfPizza>
			<StyledStructureOfPizza>{item.ingredients}</StyledStructureOfPizza>
			<StyledNutritionalValueOfPizza>
				<div>
					<p>{item.nutritionalValue}</p>
					<p>{item.ccal} ккал./100 гр.</p>
					<StyledPrice>Где Цена?</StyledPrice>
				</div>

			</StyledNutritionalValueOfPizza>
		</StyledSubMenuOfPizza>
	</StyledItemCard>;
}
