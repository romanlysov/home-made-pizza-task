import React from "react";
import {StyledFourItemsBlock} from "./fourItemsBlock.style";
import {ItemCard} from "./itemCard.component";

export function FourItemsBlock(props) {
	// console.log(props);
	const {items, cart, onAddToCart}=props;
	// const {child0, child1, child2, child3} = items;
	// console.log(child0);
	// console.log(child1);
	// console.log(child2);
	// console.log(props);
	if(items!==undefined){
		return <StyledFourItemsBlock id="four_items_block">
			{items.map(item => <ItemCard key={`card ${item.id}`} item = {item} cart={cart} onAddToCart={onAddToCart}/>)}
		</StyledFourItemsBlock>;
	}
	return <StyledFourItemsBlock />;
}