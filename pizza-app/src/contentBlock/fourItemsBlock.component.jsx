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
	if(items!==undefined){
		return <StyledFourItemsBlock>
			{items.map(item => <ItemCard item = {item} />)}
		</StyledFourItemsBlock>;
	}
	return <StyledFourItemsBlock />;
}