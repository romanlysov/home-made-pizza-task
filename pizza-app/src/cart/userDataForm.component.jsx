import React from "react";
import {StyledCartRightBlock,
	StyledCloseButton,
	StyledSubmitButton,
	StyledTextInput,
	StyledSelectField,
	StyledErrorMessage
} from "./cart.style";
import {cartCloseIcon} from "./images";
import {addressInputID, nameInputID, needChangeFromID, paymentTypeID, phoneInputID} from "./cartFormInputIds";

export function UserDataForm(props) {
	/* constructor(props) {
		console.log("UserDataForm constructor entered");
		super(props); */
	const testString = "I am going from far sub-child to far sub-parent";
	const {onClose,onOrderSubmit, userInfo, cart, formErrors}=props;
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
				{formErrors.emptyNameError?<StyledErrorMessage id="name_error">Имя должно быть не пусто</StyledErrorMessage>:[]}
				{formErrors.tooLongNameError?<StyledErrorMessage id="name_error">Длина имени не должна превышать 128 символов</StyledErrorMessage>:[]}
				<p>Телефон</p>
				<StyledTextInput id={phoneInputID} defaultValue={phone} />
				{formErrors.emptyPhoneError?<StyledErrorMessage id="phone_error">Следует указать телефон</StyledErrorMessage>:[]}
				{formErrors.incorrectPhoneError?<StyledErrorMessage id="phone_error">Телефон имеет неверный формат</StyledErrorMessage>:[]}
				<p>Адрес</p>
				<StyledTextInput id={addressInputID} defaultValue={address}/>
				{formErrors.emptyAddressError?<StyledErrorMessage id="address_error">Следует указать адрес доставки</StyledErrorMessage>:[]}
				{formErrors.tooLongAddressError?<StyledErrorMessage id="address_error">Длина адреса доставки не должна превышать 256 символов</StyledErrorMessage>:[]}
				<p>Тип оплаты</p>
				<StyledSelectField id={paymentTypeID} defaultValue={paymentType}>
					<option value="CASH">Наличными</option>
					<option value="CARD">Картой</option>
				</StyledSelectField>
				<p>Нужна сдача с</p>
				<StyledTextInput id={needChangeFromID} defaultValue={needChangeFrom} />
				{formErrors.invalidChangeFromError?<StyledErrorMessage id="changeFrom_error">Сумма для сдачи должна быть целым положительным числом, не более 5000</StyledErrorMessage>:[]}
				{/* TODO: prevent from submit */}
				<div />
				<StyledSubmitButton id="order_submit_button" type="button" onClick={onOrderSubmit}>
					Оформить заказ
				</StyledSubmitButton>
				{formErrors.orderSendingError?<StyledErrorMessage id="order_send_error">Ошибка при отправке заказа. Возможно, сервер недоступен</StyledErrorMessage>:[]}
				{formErrors.emptyCartError?<StyledErrorMessage id="order_send_error">Корзина не может быть пуста</StyledErrorMessage>:[]}
				{formErrors.tooManyItemsError?<StyledErrorMessage id="order_send_error">К сожалению, мы не сможем доставить больше 5 пицц и 4 напитков</StyledErrorMessage>:[]}
			</form>
		</StyledCartRightBlock>
		<StyledCloseButton id="cart_close_button" onClick={()=>{onClose(testString);}}>
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