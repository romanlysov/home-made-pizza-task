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

export const App = () => {
	const pps=[
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
	return (
		<Router>
			<StyledAppContainer>
				<Header />
				<DescribeFrontImage />
				<a name="menu" />
				<MenuBar />
				<a name="OpenPizza" />
				<ContentBlock labelImage = {openPizzaLabelImage} items = {pps} />
				<a name="ClosedPizza" />
				<ContentBlock labelImage = {closedPizzaLabelImage} items = {pps} />
				<a name="Drinks" />
				<ContentBlock labelImage = {drinksLabelImage} items = {pps} />
				<a name="delivery" />
				<Delivery />
				<Footer />
			</StyledAppContainer>
		</Router>
	);
};

export default memo(App);
