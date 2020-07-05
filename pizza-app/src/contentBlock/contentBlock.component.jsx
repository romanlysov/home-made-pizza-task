import React from "react";
import {StyledContentBlock} from "./contentBlock.style";
import {SiteBlockLabel} from "../siteBlockLabel/siteBlockLabel.component";
import {FourItemsBlock} from "./fourItemsBlock.component";
// import {StyledFourItemsBlock} from "./fourItemsBlock.style";
import {openPizzaLabelImage} from "./images";

export function ContentBlock(props) {
	const {labelImage, items, cart, onAddToCart}=props;
	console.log("ContentBlock's cart");
	console.log(cart);
	console.log([{id: "5fa15f7f-799b-4423-9d89-5fa1192db915", quantity: 4}]);
	return <StyledContentBlock>
		<SiteBlockLabel background={labelImage}/>
		<FourItemsBlock items={items} cart={cart} onAddToCart={onAddToCart} />
	</StyledContentBlock>;
}
