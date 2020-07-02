import React from "react";
import {StyledFourItemsBlock} from "./fourItemsBlock.style";
import {ItemCard} from "./itemCard.component";

export function FourItemsBlock(props) {
	// console.log(props);
	const {items}=props;
	// const {child0, child1, child2, child3} = items;
	// console.log(child0);
	// console.log(child1);
	// console.log(child2);
	// console.log(props);
	return <StyledFourItemsBlock>
		<ItemCard item = {items[0]} />
		<ItemCard item = {items[1]} />
		<ItemCard item = {items[2]} />
		<ItemCard item = {items[3]} />
	</StyledFourItemsBlock>;
}