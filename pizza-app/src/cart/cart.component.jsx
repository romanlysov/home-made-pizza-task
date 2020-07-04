import React from "react";
import {StyledCart,
	StyledCartLeftBlock,
	StyledCartRightBlock,
	StyledTextInput,
	StyledSubmitButton,
	StyledForm,
	StyledCloseButton
} from "./cart.style";
import {cartCloseIcon} from "./images";
import {UserDataForm} from "./userDataForm.component";



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
	const {onClose}=props;
	return <StyledCart>
		<StyledCartLeftBlock>
			<div />
			<p>Итого</p>
		</StyledCartLeftBlock>
		<UserDataForm onClose={onClose} />
	</StyledCart>;
	/* } */
};

