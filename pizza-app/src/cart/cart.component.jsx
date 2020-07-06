import React from "react";
import {StyledCart,
	StyledCartLeftBlock,
	StyledCartRightBlock,
	StyledTextInput,
	StyledSubmitButton,
	StyledForm,
	StyledCloseButton,
	StyledItemBlock,
	StyledItemIcon,
	StyledItemInfo,
	StyledItemDeleteButton,
	StyledLabel,
	StyledPriceAndButtonsContainer,
	StyledPrice,
	StyledModifyQuantityButtonsBlock,
	StyledModifyButton,
	StyledQuantityLabel,
} from "./cart.style";
import {cartCloseIcon,
	minusButton,
	plusButton
} from "./images";
import {UserDataForm} from "./userDataForm.component";
import {ItemCard} from "../contentBlock/itemCard.component";
import {meatPizzaImage} from "../contentBlock/images";
import {imageToItemMapper} from "../imageToItemMapper/mapper";


// Cart is like this:
export const cartContentTemplate = {
	productAndNumberList: [],
	name: "",
	address: "",
	phone: "",
	paymentType: null,
	sumToChangeFrom: null
};

export function Cart(props){
	/* constructor(props) {
		super(props); */
	const {onClose, userInfo, cart, productList, onIncrease,
		onDecrease, onDeleteItem, onOrderSubmit, formErrors}=props;
	console.log("Cart entered");
	console.log(cart);
	console.log("productList");
	console.log(productList);
	let totalCost = 0;
	function itemBlock(itemInCart){
		let productLabelAndPrice = {label: "Unknown", price: "Unknown"};
		productLabelAndPrice=productList!==undefined?productList.pizza.reduce((acc, product)=>{
			if(product.id==itemInCart.id){
				totalCost+=product.price*itemInCart.quantity;
				return {label: product.productName, price: product.price};
			}
			return acc;
		}, {label: "Unknown", price: "Unknown"}) : {label: "Unknown", price: "Unknown"};
		if(productLabelAndPrice.label=="Unknown"){
			productLabelAndPrice=productList!==undefined?productList.drinks.reduce((acc, product)=>{
				if(product.id==itemInCart.id){
					totalCost+=product.price*itemInCart.quantity;
					return {label: product.productName, price: product.price};
				}
				return acc;
			}, {label: "Unknown", price: "Unknown"}) : {label: "Unknown", price: "Unknown"};
		}
		return <StyledItemBlock key={itemInCart.id}>
			<StyledItemIcon background={imageToItemMapper(productLabelAndPrice.label)}/>
			<StyledItemInfo>
				<StyledLabel>
					<p>{productLabelAndPrice.label}</p>
				</StyledLabel>
				<StyledPriceAndButtonsContainer>
					<StyledPrice>
						<p>{productLabelAndPrice.price} руб.</p>
					</StyledPrice>
					<StyledModifyQuantityButtonsBlock>
						<StyledModifyButton onClick={()=>{onDecrease(itemInCart.id)}}>
							<img src={minusButton} />
						</StyledModifyButton>
						<StyledQuantityLabel>
							<p>{itemInCart.quantity}</p>
						</StyledQuantityLabel>
						<StyledModifyButton onClick={()=>{onIncrease(itemInCart.id)}} >
							<img src={plusButton} />
						</StyledModifyButton>
					</StyledModifyQuantityButtonsBlock>
				</StyledPriceAndButtonsContainer>
			</StyledItemInfo>
			<StyledItemDeleteButton onClick={()=>{onDeleteItem(itemInCart.id)}}>
				<img src={cartCloseIcon} />
			</StyledItemDeleteButton>
		</StyledItemBlock>
	};
	return <StyledCart>
		<StyledCartLeftBlock>
			{cart!==undefined?cart.map(itemBlock):""}
			<p>Итог {totalCost} руб.</p>
		</StyledCartLeftBlock>
		<UserDataForm onClose={onClose} userInfo = {userInfo}
			  cart={cart} onOrderSubmit={onOrderSubmit}
			  formErrors={formErrors}/>
	</StyledCart>;
	/* } */
};

