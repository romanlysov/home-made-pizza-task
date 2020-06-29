import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Logo} from './header/logo/logo.component';
import { StyledAppContainer } from './app.styles';
import {StyledHeader} from "./header/header.style";
import {Header} from "./header/header.component";
import {Footer} from "./footer/footer.component";
import {Delivery} from "./delivery/delivery.component";

export const App = () => {
	return (
		<Router>
			<StyledAppContainer>
				<Header />
				<Delivery />
				<Footer />
			</StyledAppContainer>
		</Router>
	);
};

export default memo(App);
