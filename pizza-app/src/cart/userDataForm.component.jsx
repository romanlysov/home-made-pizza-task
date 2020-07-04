import React from "react";
import {StyledCartRightBlock, StyledCloseButton, StyledSubmitButton, StyledTextInput} from "./cart.style";
import {cartCloseIcon} from "./images";

export function UserDataForm(props) {
	/* constructor(props) {
		console.log("UserDataForm constructor entered");
		super(props); */
	const testString = "I am going from far sub-child to far sub-parent";
	const {onClose}=props;
	return <>
		<StyledCartRightBlock>
			<form>
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
		</StyledCartRightBlock>
		<StyledCloseButton onClick={()=>{onClose(testString);}}>
			{ /* <StyledCloseButton onClick={onClose}> */ }
			<img src={cartCloseIcon} />
		</StyledCloseButton>
	</>
	/* }

	componentDidMount() {
	};

	componentDidUpdate() {
	};
	*/
};