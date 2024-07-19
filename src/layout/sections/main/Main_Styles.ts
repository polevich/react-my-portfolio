import styled from "styled-components"
import { Container } from "../../../components/Container"
import { font } from "../../../styles/Common"
import { myTheme } from "../../../styles/Theme"

const Main = styled.section`
	${Container} {
		margin-top: 210px;
	}
`

const PhotoWrapper = styled.div`
	position: relative;
	z-index: 0;

	&::before {
		content: "";
		position: absolute;
		top: -9px;
		left: -9px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 367px;
		height: 367px;
		background-image: linear-gradient(#E70FAA,#00C0FD);
		border-radius: 50%;
		z-index: -1;
	}
`

const Photo = styled.img`
	width: 349px;
	height: 349px;
	object-fit: cover;
	border-radius: 50%;
`

const StyledText = styled.div`
	display: flex;
	flex-direction: column;
	letter-spacing: -0.02em;
	${font({ weight: 700, Fmax: 58, Fmin: 36, lineHeight: 1.3 })};
	color: ${myTheme.colors.colorTitle};
`

const Name = styled.span`
	${font({ weight: 700, Fmax: 58, Fmin: 36 })};
	background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const MainTitle = styled.h1`
	${font({ weight: 700, Fmax: 58, Fmin: 36 })};
	color: ${myTheme.colors.colorTitle};
	p {
		display: none;
	}
`

export const S = {
  Main,
  PhotoWrapper,
  Photo,
  StyledText,
  Name,
  MainTitle,
}