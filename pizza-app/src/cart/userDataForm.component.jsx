import React from "react";
import {StyledCartRightBlock, StyledCloseButton, StyledSubmitButton, StyledTextInput} from "./cart.style";
import {cartCloseIcon} from "./images";
import {addressInputID, nameInputID, phoneInputID} from "./cartFormInputIds";

export function UserDataForm(props) {
	/* constructor(props) {
		console.log("UserDataForm constructor entered");
		super(props); */
	const testString = "I am going from far sub-child to far sub-parent";
	const {onClose, userInfo, cart}=props;
	const name = (() => {
		console.log("userInfo");
		console.log(userInfo);
		if(userInfo!==undefined&&userInfo.name!==undefined) {

			return userInfo.name;
		}
		return ""})();
	const phone = (() => {
		if(userInfo!==undefined&&userInfo.phone!==undefined) {
			return userInfo.phone;
		}
		return ""})();
	const address = (() => {
		if(userInfo!==undefined&&userInfo.address!==undefined) {
			return userInfo.address;
		}
		return ""})();
	return <>
		<StyledCartRightBlock>
			<form>
				<p>ФИО</p>
				<StyledTextInput id={nameInputID} defaultValue={name} />
				<p>Телефон</p>
				<StyledTextInput id={phoneInputID} defaultValue={phone} />
				<p>Адрес</p>
				<StyledTextInput id={addressInputID} defaultValue={address}/>
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