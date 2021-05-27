import React from "react";
import {StyledItemCard,
	StyledPizza,
	StyledNameOfPizza,
	StyledNutritionalValueOfPizza,
	StyledStructureOfPizza,
	StyledSubMenuOfPizza,
	StyledPrice,
	StyledBuyButton, StyledPriceLine, StyledButtonText
} from "./itemCard.style";
import {meatPizzaImage} from "./images";
import {imageToItemMapper} from "../imageToItemMapper/mapper";

export function ItemCard(props){
	console.log(props);
	const {item, cart, onAddToCart}=props;
	const ingredientsMapper={
		CHICKEN: "Курица",
		HAM: "Ветчина",
		PEPPERONI: "Пеперони",
		TOMATO_SAUCE: "Томатный соус",
		CHORIZA: "Охотьничьи колбаски",
		MOZZARELLA: "Моцарелла",
		LARGE_PORTION_OF_MOZZARELLA: "Много моцареллы",
		MIX_OF_CHEDDAR_AND_PARMESAN: "Микс чеддар и пармезан",
		BLUE_CHEESE: "Дор Блю",
		CREAM_SAUCE: "Сметана",
		CHAMPIGNONS: "Шампиньоны",
		GARLIC: "Чеснок",
		COTTAGE_CHEESE: "Мягкий сыр"
	};
	let Ingredients = "";
	if(item.ingredients!==undefined) {
		Ingredients = item.ingredients.reduce((acc, ingredient) => {
			acc.ing_list += ingredientsMapper[ingredient];
			acc.ing_list += ", ";
			return acc;
		}, {ing_list: ""}).ing_list;
		console.log(Ingredients);
		Ingredients = Ingredients[0] + Ingredients.slice(1, Ingredients.length-2).toLowerCase();
	}
	// TODO: check for errors
	const buyButtonValue = cart!==undefined?( () => {
		const isInCart = cart.reduce((acc, cartItem)=>{
			if(cartItem.id == item.id){
				return cartItem.quantity;
			}
			return acc;
		}, false);
		if(isInCart){
			return `В корзине (${isInCart})`;
		}
		return "Купить";
	} )():"Купить";
	const buttonID = `${"button_add"} ${item.id}`;

	return <StyledItemCard id="menu_item_card">
		<StyledPizza background={imageToItemMapper(item.productName)}/>
		<StyledSubMenuOfPizza>
			<StyledNameOfPizza id="menu_item_label">{item.productName}</StyledNameOfPizza>
			<StyledStructureOfPizza id="menu_item_ingredients">{Ingredients}</StyledStructureOfPizza>
			<StyledNutritionalValueOfPizza>
				<div>
					<p>{item.nutritionalValue}</p>
					{
						item.ccal!==undefined?(<p>{item.ccal} ккал./100 гр.</p>):""
					}
					{
						item.volume!==undefined?(<p>{item.volume} л.</p>):""
					}
					<StyledPriceLine>
						<StyledPrice id="menu_item_price">{item.price} руб.</StyledPrice>
						<StyledBuyButton id="menu_item_add_to_basket_button" value={buttonID} onClick={()=>{onAddToCart(item.id);}}>
							<StyledButtonText id="menu_item_button_text">{buyButtonValue}</StyledButtonText>
						</StyledBuyButton>
					</StyledPriceLine>
				</div>

			</StyledNutritionalValueOfPizza>
		</StyledSubMenuOfPizza>
	</StyledItemCard>;
}
