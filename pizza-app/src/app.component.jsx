import {BrowserRouter as Router} from 'react-router-dom';
import {Logo, Header, Banner, Catalog, DeliverySection, About, Footer, Modal, Cart, AddressForm} from 'ui-kit';
import React, {useState, useEffect, useMemo} from 'react';
import {StyledAppContainer} from './app.styles';

import {drinksItems, menuItems, pizzaItems} from './data-stub'

const getDrinks = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(drinksItems), 4000);
	});
}

const getPizza = async () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(pizzaItems), 2000);
	});
}

const postOrder = async () => {
	return new Promise((resolve, reject) => {
		// eslint-disable-next-line prefer-promise-reject-errors
		setTimeout(() => reject('err'), 1000);
	});
}

export const App = () => {
	const [pizzaState, setPizzaState] = useState([]);
	const [drinksState, setDrinksState] = useState([]);
	const [cartState, setCartState] = useState({cart: []});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		getPizza().then((response) => {
			setPizzaState(response)
		})
		getDrinks().then((response) => {
			setDrinksState(response)
		})
	}, [])

	const cartCount = useMemo(
		() =>
			cartState.cart.reduce((acc, elem) => {
				return acc + (elem.count !== undefined ? elem.count : 0);
			}, 0),
		[cartState.cart]
	);

	const addItemToCart = (item) => () => {
		const isItemExist = cartState.cart.find((stateItem) => item.title === stateItem.title);
		if (isItemExist) {
			const newCart = cartState.cart.map((value) => {
				return value.title === item.title ? {...value, count: value.count + 1} : value;
			});
			setCartState({cart: newCart})
		} else {
			setCartState({cart: [...cartState.cart, {...item, count: 1}]})
		}
	}

	const removeItemFromCart = (item) => () => {
		const isItemExist = cartState.cart.find((stateItem) => item.title === stateItem.title);
		if (isItemExist) {
			const newCart = cartState.cart.map((value) => {
				return value.title === item.title ? {...value, count: value.count - 1} : value;
			});
			setCartState({cart: newCart})
		}
	}
	const deleteItemFromCart = (item) => () => {
		const newCart = cartState.cart.filter((value) => {
			return value.title !== item.title;
		});
		setCartState({cart: newCart})
	}

	return (
		<Router>
			<StyledAppContainer>
				<Header cartCount={cartCount} menuItems={menuItems} onModalOpen={() => setIsModalOpen(true)}/>
				<Banner/>
				<Catalog items={pizzaState} heading="Пицца" cartState={cartState}
					onAddToCart={(item) => addItemToCart(item)}/>
				<Catalog items={drinksState} heading="Напитки" cartState={cartState}
					onAddToCart={(item) => addItemToCart(item)}/>
				<DeliverySection/>
				<About/>
				<Footer menuItems={menuItems}/>
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
					<Cart cartState={cartState}
						  onAddToCart={(item) => addItemToCart(item)}
						  onRemoveFromCart={(item) => removeItemFromCart(item)}
						  onDeleteFromCart={(item) => deleteItemFromCart(item)}
					>
						<AddressForm onSubmit={(e) => {
							e.preventDefault();
							postOrder().catch(() => {
								setIsError(true)
							});
						}} isError={isError}/>
					</Cart>
				</Modal>
			</StyledAppContainer>
		</Router>
	);
};

export default App;