import styled from "styled-components"
import { myTheme } from "../../../styles/Theme"

const Stacks = styled.section`
`

const StacksGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-items: center;
	align-items: center;
	row-gap: 110px;

	@media ${myTheme.media.desktop} {
		grid-template-columns: repeat(4, 1fr);
	}

	@media ${myTheme.media.tablet} {
		grid-template-columns: repeat(3, 1fr);
	}
`

export const S = {
	Stacks,
	StacksGrid,
}