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
// import {UserDataForm} from "./userDataForm";


// Cart is like this:
export const cartContentTemplate = {
	productAndNumberList: [],
	name: "",
	address: "",
	phone: "",
	paymentType: null,
	sumToChangeFrom: null
};

const UserDataForm = () => {
	return <form>
		<p>ФИО</p>
		<StyledTextInput />
		<p>Телефон</p>
		<StyledTextInput />
		<p>Тип оплаты</p>
		<StyledTextInput />
		<p>Нужна сдача с</p>
		<StyledTextInput />
		<StyledSubmitButton>
			Оформить заказ
		</StyledSubmitButton>
	</form>
};

export function Cart(props) {
	const {onClose}=props;
	return <StyledCart>
		<StyledCartLeftBlock>
			<div />
			<p>Итого</p>
		</StyledCartLeftBlock>
		<StyledCartRightBlock>
			<UserDataForm />
		</StyledCartRightBlock>
		<StyledCloseButton onClick={onClose}>
			<img src={cartCloseIcon} />
		</StyledCloseButton>
	</StyledCart>;
};
