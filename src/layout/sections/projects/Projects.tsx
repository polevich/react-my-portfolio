import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import project1 from "./../../../assets/image/project-1.webp"
import project2 from "./../../../assets/image/project-2.webp"
import project3 from "./../../../assets/image/project-3.webp"
import project4 from "./../../../assets/image/project-4.webp"
import project5 from "./../../../assets/image/project-5.webp"
import project6 from "./../../../assets/image/project-6.webp"
import { Project } from './project/Project';
import { SectionText } from '../../../components/SectionText';
import { Container } from '../../../components/Container';
import { S } from './Projects_Styles';

const projectsData = [
	{
		src: project1,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		description: 'Tech stack:',
		techStack: "HTML , JavaScript, SASS, React",
	},
	{
		src: project2,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		description: 'Tech stack:',
		techStack: "HTML , JavaScript, SASS, React",
	},
	{
		src: project3,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		description: 'Tech stack:',
		techStack: "HTML , JavaScript, SASS, React",
	},
	{
		src: project4,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		description: 'Tech stack:',
		techStack: "HTML , JavaScript, SASS, React",
	},
	{
		src: project5,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		description: 'Tech stack:',
		techStack: "HTML , JavaScript, SASS, React",
	},
	{
		src: project6,
		title: 'Project Tile goes here',
		text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		description: 'Tech stack:',
		techStack: "HTML , JavaScript, SASS, React",
	}
]

export const Projects: React.FC = () => {
	return (
		<S.Projects id='projects'>
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<SectionText >Things I’ve built so far</SectionText>
				<FlexWrapper wrap='wrap' justify='space-between'>
					{projectsData.map((p, index) => {
						return (
							<Project src={p.src} title={p.title} text={p.text} description={p.description} techStack={p.techStack} key={index} />
						)
					})}
				</FlexWrapper>
			</Container>
		</S.Projects>
	);
};