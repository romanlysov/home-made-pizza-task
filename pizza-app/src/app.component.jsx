import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Logo} from './header/logo/logo.component';
import { StyledAppContainer} from './app.styles';
import {StyledHeader} from "./header/header.style";
import {Header} from "./header/header.component";
import {Footer} from "./footer/footer.component";
import {Delivery} from "./delivery/delivery.component";
import {MenuBar} from "./menuBar/menuBar.component";
import {DescribeFrontImage} from "./describeFrontImage/describeFrontImage.component";
import {ContentBlock} from "./contentBlock/contentBlock.component";
import {openPizzaLabelImage, closedPizzaLabelImage, drinksLabelImage} from "./contentBlock/images";
import {AboutUs} from "./aboutUs/aboutUs.component";
import {getJson, postJson} from "./services";
import {Modal} from "./modal/modal.component";
import {StyledShadow} from "./modal/modal.style";
import {Cart} from "./cart/cart.component";
import {addressInputID, nameInputID, needChangeFromID, paymentTypeID, phoneInputID} from "./cart/cartFormInputIds";
import {Contacts} from "./contacts/contacts.component";

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			/* productList: {
				openPizza: [],
				closedPizza: []
			}, */
			isCartOpen: false,
			// cart: [{id: "5fa15f7f-799b-4423-9d89-5fa1192db915", quantity: 4}]
			cart: []
		};
		// this.state = {openPizza:[], closedPizza:[]};
	}

	componentDidMount() {
		console.log("componentDidMount Works!!!");
		console.log(this.state)

		const obj = getJson('http://localhost:8080/GetProducts');
		let dat;
		obj.then((data)=>{
			// this.state = data;
			dat = data;
			console.log("Get query in ComponentDidMount");
			console.log(data);
			const groupedProducts = data.reduce((acc, product)=>{
				const isPizza = product.pizzaType !== undefined;
				if(isPizza){
					acc.pizza.push(product);
				}
				else{
					acc.drinks.push(product);
				}
				return acc;
			}, {pizza: [], drinks: []});
			this.setState((state)=>{
				const newState = {
					...this.state,
					productList: groupedProducts
				};
				return newState;
			});
			// this.state=groupedProducts;
			console.log("this.state");
			console.log(this.state);
			// this.render();
		});
		console.log(dat);
	}

	componentDidUpdate() {
		console.log("componentDidUpdate Works!!!");
		console.log(this.state);
	}

	cartOpeningHadler = () => {
		console.log("cartOpeningHadler entered");
		console.log(this.state);
		this.setState((state)=>{
			const {productList, userInfo, cart} = state;
			const newState ={
				isCartOpen: true,
				cart,
				productList,
				userInfo
			};
			// newState.isCartOpen = true;
			return newState;
		});
	}

	cartClosingHadler = (testString) => {
		console.log("cartClosingHadler entered");
		console.log(this.state);
		console.log(testString);
		const name = document.getElementById(nameInputID).value;
		console.log("Name in form: ");
		console.log(name);
		this.setState((state)=>{
			const {productList, cart} = state;
			const newState ={
				isCartOpen: false,
				productList,
				cart,
				userInfo: {
					name: document.getElementById(nameInputID).value,
					phone: document.getElementById(phoneInputID).value,
					address: document.getElementById(addressInputID).value,
					paymentType: document.getElementById(paymentTypeID).value,
					needChangeFrom: document.getElementById(needChangeFromID).value
				}
			};
			// newState.isCartOpen = true;
			return newState;
		});
	}

	addToCartHandler = (itemID) => {
		console.log("addToCartHandler entered");
		console.log(this.state);
		console.log(itemID);
		this.setState((state)=>{
			let {cart} = state;
			const {isCartOpen, productList, userInfo} = state
			let cartChanged = false;
			const newCart= cart.map((itemAndQ)=>{
				if(itemAndQ.id==itemID){
					cartChanged = true;
					return {
						id: itemAndQ.id,
						quantity: itemAndQ.quantity + 1
					};
				}
				return itemAndQ;
			});
			cart=newCart;
			if(!cartChanged){
				newCart.push({
					id: itemID,
					quantity: 1
				});
			}
			const newState ={
				isCartOpen: false,
				productList,
				cart,
				userInfo
			};
			// newState.isCartOpen = true;
			return newState;
		});
	};

	increaseQuantityInCartHandler = (itemID) => {
		console.log("increaseQuantityInCartHandler entered");
		console.log(this.state);
		console.log(itemID);
		this.setState((state)=>{
			let {cart} = state;
			const {isCartOpen, productList, userInfo} = state
			let cartChanged = false;
			const newCart= cart.map((itemAndQ)=>{
				if(itemAndQ.id==itemID){
					cartChanged = true;
					return {
						id: itemAndQ.id,
						quantity: itemAndQ.quantity + 1
					};
				}
				return itemAndQ;
			});
			cart=newCart;
			const newState ={
				isCartOpen,
				productList,
				cart,
				userInfo
			};
			// newState.isCartOpen = true;
			return newState;
		});
	};

	decreaseQuantityInCartHandler = (itemID) => {
		console.log("decreaseQuantityInCartHandler entered");
		console.log(this.state);
		console.log(itemID);
		this.setState((state)=>{
			let {cart} = state;
			const {isCartOpen, productList, userInfo} = state
			let cartChanged = false;
			const newCart= cart.reduce((acc, itemAndQ)=>{
				if(itemAndQ.id==itemID){
					cartChanged = true;
					const newQuantity = (itemAndQ.quantity==0?itemAndQ.quantity:itemAndQ.quantity-1);
					if(newQuantity!=0){
						acc.push({
							id: itemAndQ.id,
							quantity: newQuantity
						});
					}
					return acc;
				}
				acc.push(itemAndQ);
				return acc;
			}, []);
			cart=newCart;
			const newState ={
				isCartOpen,
				productList,
				cart,
				userInfo
			};
			// newState.isCartOpen = true;
			return newState;
		});
	};

	deleteItemFromCartHandler = (itemID) => {
		console.log("decreaseQuantityInCartHandler entered");
		console.log(this.state);
		console.log(itemID);
		this.setState((state)=>{
			let {cart} = state;
			const {isCartOpen, productList, userInfo} = state;
			const newCart= cart.reduce((acc, itemAndQ)=>{
				if(itemAndQ.id==itemID){
					return acc;
				}
				acc.push(itemAndQ);
				return acc;
			}, []);
			cart=newCart;
			const newState ={
				isCartOpen,
				productList,
				cart,
				userInfo
			};
			// newState.isCartOpen = true;
			return newState;
		});
	};

	orderSubmitHandler = () => {
		console.log("orderSubmitHandler Works!!!");
		console.log(this.state);
		const amountOfPizza=0;
		const amountOfDrink=0;
		const {productList, cart}=this.state;
		const orderObject = {
			products: cart.reduce((acc, itemAndQ)=>{
				for(let i=0;i<itemAndQ.quantity;i+=1){
					acc.push(itemAndQ.id);
				}

			}, []),
			name: document.getElementById(nameInputID).value,
			phoneNumber: document.getElementById(phoneInputID).value,
			address: document.getElementById(addressInputID).value,
			payMethod: document.getElementById(paymentTypeID).value,
		}
		console.log("orderObject");
		console.log(orderObject);
		const obj = postJson('http://localhost:8080/CreateOrderDto');
		obj.then((data)=>{
			console.log("Then method in orderSubmitHandler entered");
			this.setState((state)=>{
				const newState = {
					// TODO: userInfo
					productList,
					isCartOpen: false,
					cart: []
				};
				return newState;
			});
			console.log("Order sent. New state: ");
			console.log(this.state);
		});
	}

	render() {
		console.log("App render entered");
		const pps = [
			{
				productName: "Мясная",
				price: "765",
				nutritionalValue: "Б: 100, Ж: 100, У: 100",
				ccal: "684",
				ingredients: "Неаполитанский соус, сервелат, колбаски, куриная копченая грудка."
			},
			{
				productName: "Мясная",
				price: "765",
				nutritionalValue: "Б: 100, Ж: 100, У: 100",
				ccal: "684",
				ingredients: "Неаполитанский соус, сервелат, колбаски, куриная копченая грудка."
			},
			{
				productName: "Мясная",
				price: "765",
				nutritionalValue: "Б: 100, Ж: 100, У: 100",
				ccal: "684",
				ingredients: "Неаполитанский соус, сервелат, колбаски, куриная копченая грудка."
			},
			{
				productName: "Мясная",
				price: "765",
				nutritionalValue: "Б: 100, Ж: 100, У: 100",
				ccal: "684",
				ingredients: "Неаполитанский соус, сервелат, колбаски, куриная копченая грудка."
			}
		];
		const {isCartOpen, productList, userInfo, cart} = this.state;
		console.log("pizza");
		console.log(productList!==undefined?productList.pizza:"productList is undefined still");
		return (
			<Router>
				<StyledAppContainer>
					<Header onCartIconClick = {this.cartOpeningHadler}/>
					<DescribeFrontImage/>
					<a name="menu"/>
					<MenuBar/>
					<a name="OpenPizza"/>
					<ContentBlock labelImage={openPizzaLabelImage} items={productList!==undefined?productList.pizza:[]} cart={cart!==undefined?cart:[]} onAddToCart={this.addToCartHandler}/>
					{
						/* for(i=0;i<3;i++) */
					}
					{
						/* <a name="ClosedPizza"/>
						<ContentBlock labelImage={closedPizzaLabelImage} items={pps}/>
						 */
					}
					<a name="Drinks" />
					<ContentBlock labelImage={drinksLabelImage} items={productList!==undefined?productList.drinks:[]} cart={cart!==undefined?cart:[]} onAddToCart={this.addToCartHandler}/>

					<a name="delivery"/>
					<Delivery/>
					<a name="about"/>
					<AboutUs/>
					<a name="contacts"/>
					<Contacts/>
					<Footer/>
					{
						(()=>{
							console.log("Footer function entered");
							console.log(isCartOpen);
							if(isCartOpen) {
								return <StyledShadow>
									<Cart onClose = {this.cartClosingHadler} userInfo = {userInfo} cart = {cart} productList={productList} onIncrease = {this.increaseQuantityInCartHandler} onDecrease={this.decreaseQuantityInCartHandler} onDeleteItem={this.deleteItemFromCartHandler} onOrderSubmit={this.orderSubmitHandler}/>
								</StyledShadow>;
							}
							return "";
						})()
					}
				</StyledAppContainer>
			</Router>
		);
	}
};

export default memo(App);
