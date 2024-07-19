import styled from "styled-components"
import { myTheme } from "../../styles/Theme"

const Header = styled.header`
	background-color: ${myTheme.colors.background};
	opacity: 0.9;
	padding: 20px 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;

	a {
		flex-grow: 3;
	}
`

const Box = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 2;
	gap: 30px;
`

export const S = {
  Header,
	Box,
}