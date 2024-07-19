import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionText } from '../../../components/SectionText';
import { Container } from '../../../components/Container';
import { Icon } from '../../../components/icon/Icon';
import { S } from './Stacks_Styles';
import { Fade } from "react-awesome-reveal";

const stacksData = [
	{
		height: '120px',
		width: '120px',
		viewBox: '0 0 120px 120px',
		iconId: "html",
	},
	{
		height: '120px',
		width: '120px',
		viewBox: '0 0 120px 120px',
		iconId: "css",
	},
	{
		height: '120px',
		width: '120px',
		viewBox: '0 0 120px 120px',
		iconId: "js",
	},
	{
		height: '101px',
		width: '113px',
		viewBox: '0 0 101px 113px',
		iconId: "react",
	},
	{
		height: '100px',
		width: '105px',
		viewBox: '0 0 100px 105px',
		iconId: "redux",
	},
	{
		height: '87px',
		width: '88px',
		viewBox: '0 0 87px 88px',
		iconId: "bootstrap",
	},
	{
		height: '69px',
		width: '115px',
		viewBox: '0 0 69px 115px',
		iconId: "tailwind",
	},
	{
		height: '87px',
		width: '117px',
		viewBox: '0 0 87px 117px',
		iconId: "sass",
	},
	{
		height: '105px',
		width: '105px',
		viewBox: '0 0 105px 105px',
		iconId: "git",
	},
	{
		height: '120px',
		width: '120px',
		viewBox: '0 0 120px 120px',
		iconId: "greensock",
	},
	{
		height: '112px',
		width: '112px',
		viewBox: '0 0 112px 112px',
		iconId: "vscode",
	},
	{
		height: '88px',
		width: '88px',
		viewBox: '0 0 88px 88px',
		iconId: "github",
	},
]

export const Stacks: React.FC = () => {
	return (
		<S.Stacks id='techstack'>
			<Container>
				<SectionTitle>My Tech Stack</SectionTitle>
				<SectionText >Technologies I’ve been working with recently</SectionText>
				<S.StacksGrid>
					<Fade cascade={true} damping={0.2}>
						{stacksData.map((s, index) => {
							return (
								<Icon height={s.height} key={index} width={s.width} viewBox={s.viewBox} iconId={s.iconId} />
							)
						})}
					</Fade>
				</S.StacksGrid>
			</Container>
		</S.Stacks>
	);
};