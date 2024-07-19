import styled from "styled-components"
import { myTheme } from "../../styles/Theme"

const Footer = styled.footer`
	background-color: ${myTheme.colors.background};
	padding: 110px 0 60px 0;
`

const FooterUp = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	align-items: center;

	padding-bottom: 40px;
	border-bottom: 2px solid ${myTheme.colors.colorText};
	margin-bottom: 45px;
	
	@media ${myTheme.media.tablet} {
		grid-template-columns: 1fr;
	}
`

const Link = styled.a`
`
const Box = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	gap: 30px;

	& :last-child{
		justify-content: end;
	}

	@media ${myTheme.media.mobile} {
		grid-template-columns: 1fr;

		& :last-child{
		justify-content: start;
		}
	}
`

const Phone = styled.a`
	font-family: "DM Sans", sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 144%;
	color: ${myTheme.colors.colorTitle};
	white-space: nowrap;
	opacity: 1;
	text-decoration: underline transparent;
	transition: ${myTheme.animations.transition};

	&:hover {
		text-decoration: underline;
	}
`

const Email = styled.a`
	font-family: "DM Sans", sans-serif;
	font-weight: 400;
	font-size: 18px;
	line-height: 144%;
	color: ${myTheme.colors.colorTitle};
	opacity: 1;
	text-decoration: underline transparent;
	transition: ${myTheme.animations.transition};

	&:hover {
		text-decoration: underline;
		opacity: 0.9;
	}
`

const FooterDown = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 30px;
	align-content: flex-start;
`

const Text = styled.span`
	font-weight: 400;
	font-size: 18px;
	line-height: 144%;
	color: ${myTheme.colors.colorText};
`

const FirstWord = styled.span`
	background: linear-gradient(90deg, #13b0f5 2.6%, #9a4ac6 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const SecondWord = styled.span`
	background: linear-gradient(90deg, #b039be 2.6%, #c12cb8 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const ThirdWord = styled.span`
	background: linear-gradient(90deg, #cc23b3 2.6%, #e70faa 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

export const S = {
	Footer,
	FooterUp,
	Link,
	Box,
	Phone,
	Email,
	FooterDown,
	Text,
	FirstWord,
	SecondWord,
	ThirdWord,
}