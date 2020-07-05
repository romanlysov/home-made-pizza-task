import React from "react";
import {StyledCartRightBlock,
	StyledCloseButton,
	StyledSubmitButton,
	StyledTextInput,
	StyledSelectField
} from "./cart.style";
import {cartCloseIcon} from "./images";
import {addressInputID, nameInputID, needChangeFromID, paymentTypeID, phoneInputID} from "./cartFormInputIds";

export function UserDataForm(props) {
	/* constructor(props) {
		console.log("UserDataForm constructor entered");
		super(props); */
	const testString = "I am going from far sub-child to far sub-parent";
	const {onClose, userInfo, cart, onOrderSubmit}=props;
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
	const paymentType = (() => {
		if(userInfo!==undefined&&userInfo.paymentType!==undefined) {
			return userInfo.paymentType;
		}
		return ""})();
	const needChangeFrom = (() => {
		if(userInfo!==undefined&&userInfo.needChangeFrom!==undefined) {
			return userInfo.needChangeFrom;
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
				<StyledSelectField id={paymentTypeID} defaultValue={paymentType}>
					<option value="CASH">Наличными</option>
					<option value="CARD">Картой</option>
				</StyledSelectField>
				<p>Нужна сдача с</p>
				<StyledTextInput id={needChangeFromID} defaultValue={needChangeFrom} />
				{/* TODO: prevent from submit */}
				<StyledSubmitButton type="button" onClick={onOrderSubmit}>
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