import React from "react";
import {StyledItemCard, StyledPizza, StyledNameOfPizza, StyledNutritionalValueOfPizza, StyledStructureOfPizza, StyledSubMenuOfPizza, StyledPrice} from "./itemCard.style";
import {meatPizzaImage} from "./images";

export function ItemCard(props){
	console.log(props);
	const {item}=props;
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
	return <StyledItemCard>
		<StyledPizza />
		<StyledSubMenuOfPizza>
			<StyledNameOfPizza>{item.productName}</StyledNameOfPizza>
			<StyledStructureOfPizza>{Ingredients}</StyledStructureOfPizza>
			<StyledNutritionalValueOfPizza>
				<div>
					<p>{item.nutritionalValue}</p>
					{
						item.ccal!==undefined?(<p>{item.ccal} ккал./100 гр.</p>):""
					}
					<StyledPrice>{item.price} руб.</StyledPrice>
				</div>

			</StyledNutritionalValueOfPizza>
		</StyledSubMenuOfPizza>
	</StyledItemCard>;
}
