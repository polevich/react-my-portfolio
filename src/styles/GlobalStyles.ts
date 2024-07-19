import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme";


export const GlobalStyles = createGlobalStyle`
		*,
		*::before,
		*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		margin: 0;
		font-family: "Poppins", "DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		line-height: 1.2;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	button {
		background-color: unset;
		border: none;
		cursor: pointer;
	}

	section {
		background-color: ${myTheme.colors.background};
		padding: 93px 0;
	}

	h2 {
		color: ${myTheme.colors.colorText};
	}
`
