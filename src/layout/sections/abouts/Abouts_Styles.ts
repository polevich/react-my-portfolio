import styled from "styled-components"
import { Container } from "../../../components/Container"
import { myTheme } from "../../../styles/Theme"

const Abouts = styled.section`
	display: flex;

	${Container} {
		position: relative;
		&::before {
			content: "";
			display: inline-block;
			width: 100%;
			height: 100%;
			position: absolute;
			
			background-image: url('./drawing.png');
			background-repeat: no-repeat;
			background-size: contain;
			right: -725px;
			bottom: 0;
		}
	}
`

const Title = styled.h2`
	font-weight: 700;
	font-size: 42px;
	letter-spacing: -0.01em;
	color: ${myTheme.colors.colorTitle};
`

const Text = styled.p`
	font-weight: 400;
	font-size: 18px;
	line-height: 144%;
	color: ${myTheme.colors.colorText};
`

const About = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 16px;
	border-bottom: 2px solid #ebeaed;
`

const BoxGrid = styled.div`
	display: grid;
	gap: 15px;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas: '
		title location  date 
	';
	
`

const BoxItem = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`

const Position = styled.h3`
	font-weight: 400;
	font-size: 20px;
	letter-spacing: 0.05em;
	color: ${myTheme.colors.colorText};
	
`

const Company = styled.span`
	font-weight: 500;
	font-size: 12px;
	line-height: 233%;
	letter-spacing: 0.08em;
	color: ${myTheme.colors.colorSmall};
	white-space: nowrap;
`

const Location = styled.span`
	font-weight: 500;
	font-size: 12px;
	line-height: 233%;
	letter-spacing: 0.08em;
	color: ${myTheme.colors.colorSmall};
`

const Employment = styled.span`
	font-weight: 600;
	font-size: 9px;
	line-height: 289%;
	text-align: center;
	color: #018c0f;

	border-radius: 100px;
	width: 84px;
	height: 24px;
	background-color: #d7ffe0;
`

const Period = styled.span`
	font-weight: 500;
	font-size: 12px;
	line-height: 233%;
	letter-spacing: 0.08em;
	color: ${myTheme.colors.colorSmall};
`

export const S = {
	Abouts,
	Title,
	Text,
	About,
	BoxGrid,
	BoxItem,
	Position,
	Company,
	Location,
	Employment,
	Period,
}