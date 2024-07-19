import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { myTheme } from "../../../styles/Theme"

const Projects = styled.section`
	${FlexWrapper} {
		gap: 62px 34px;
	}
`

const Project = styled.article`
	border-radius: 20px;
	width: 300px;
	box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
	background: ${myTheme.colors.backgroundCard};
	flex-grow: 1;
	transition: ${myTheme.animations.transition};

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`
const Box = styled.div`
	padding: 27px 32px 25px 29px;
`

const Image = styled.img`
	width: 100%;
	height: 260px;
	border-radius: 20px 20px 0 0;
	object-fit: cover;
`

const Title = styled.h3`
	font-weight: 500;
	font-size: 28px;
	line-height: 93%;
	color: ${myTheme.colors.colorBlack};
`

const Text = styled.p`
	font-weight: 300;
	font-size: 18px;
	line-height: 144%;
	color: ${myTheme.colors.colorText};
	margin: 17px 0 12px 0;
`

const DeacriptionItem = styled.p`
	display: flex;
	align-items: center;
	gap: 5px;
	margin-bottom: 21px;
`

const Description = styled.span`
	font-weight: 400;
	font-size: 16px;
	line-height: 162%;
	color: ${myTheme.colors.colorTitle};
`

const TechStack = styled.p`
	font-weight: 300;
	font-size: 14px;
	color: ${myTheme.colors.colorTitle};
`

const Link = styled.a`
	font-weight: 400;
	font-size: 16px;
	line-height: 162%;
	text-decoration: none;
	color: ${myTheme.colors.colorBlack};
	display: flex;
	align-items: center;
	gap: 10px;
	text-decoration: underline transparent;
	transition: ${myTheme.animations.transition};

	&:hover {
		text-decoration: underline;
	}
`

export const S = {
	Projects,
	Project,
	Box,
	Image,
	Title,
	Text,
	DeacriptionItem,
	Description,
	TechStack,
	Link,
} 