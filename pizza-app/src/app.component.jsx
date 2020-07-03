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
import {getJson} from "./services";

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {openPizza:[], closedPizza:[]};

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
			this.setState(groupedProducts);
			// this.state=groupedProducts;
			console.log(this.state);
			// this.render();
		});
		console.log(dat);
	}

	componentDidUpdate() {
		console.log("componentDidUpdate Works!!!");
		console.log(this.state);
	}

	render() {
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
		const {pizza, drinks} = this.state;
		console.log("pizza");
		console.log(pizza);
		return (
			<Router>
				<StyledAppContainer>
					<Header/>
					<DescribeFrontImage/>
					<a name="menu"/>
					<MenuBar/>
					<a name="OpenPizza"/>
					<ContentBlock labelImage={openPizzaLabelImage} items={pizza}/>
					{
						/* for(i=0;i<3;i++) */
					}
					{
						/* <a name="ClosedPizza"/>
						<ContentBlock labelImage={closedPizzaLabelImage} items={pps}/>
						 */
					}
					<a name="Drinks" />
					<ContentBlock labelImage={drinksLabelImage} items={drinks}/>

					<a name="delivery"/>
					<Delivery/>
					<a name="about"/>
					<AboutUs/>
					<Footer/>
				</StyledAppContainer>
			</Router>
		);
	}
};

export default memo(App);
