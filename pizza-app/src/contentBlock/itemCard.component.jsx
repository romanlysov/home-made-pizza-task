import React from "react";
import {StyledItemCard} from "./itemCard.style";
import {meatPizzaImage} from "./images";

export function ItemCard(props){
	console.log(props);
	const {item}=props;
	return <StyledItemCard>
		<img src={meatPizzaImage} />
		<h3>{item.productName}</h3>
		<p>{item.ingredients}</p>
		<p>{item.nutritionalValue}</p>
		<p>{item.ccal} ккал./100 гр.</p>
	</StyledItemCard>;
}
