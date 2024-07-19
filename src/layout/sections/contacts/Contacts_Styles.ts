import styled from "styled-components"

const Contact = styled.section`
`

const Question = styled.p`
	font-family: "DM Sans", sans-serif;
	font-weight: 700;
	font-size: 58px;
	letter-spacing: -0.02em;
	color: #1e0e62;
`

const Email = styled.span`
	font-family: "DM Sans", sans-serif;
	font-weight: 700;
	font-size: 58px;
	letter-spacing: -0.02em;
	text-align: center;
	background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

export const S = {
	Contact,
	Question,
	Email,
}