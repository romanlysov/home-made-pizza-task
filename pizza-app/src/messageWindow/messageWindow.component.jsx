import React from "react";
import {StyledMessageWindow,
	StyledButtonBlock,
	StyledCloseMessageWindowButton,
	StyledMessageBlock
} from "./messageWindow.style";
import {cartCloseIcon} from "../cart/images";

export function MessageWindow(props){
	const {message, type, onClose} = props;
	return <StyledMessageWindow>
		<StyledButtonBlock>
			<StyledCloseMessageWindowButton onClick = {()=>{window.location.reload(); console.log("message window is closing"); onClose(type);}}>
				<img src={cartCloseIcon} />
			</StyledCloseMessageWindowButton>
		</StyledButtonBlock>
		<StyledMessageBlock>
			<p>{message}</p>
		</StyledMessageBlock>
	</StyledMessageWindow>;
};