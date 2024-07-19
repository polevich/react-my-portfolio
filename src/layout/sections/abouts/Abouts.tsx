import React from 'react';
import { About } from './about/About';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { S } from './Abouts_Styles';

const aboutData = [
	{
		iconCompany: "company",
		iconLocation: "location",
		iconPeriod: "period",
		position: 'Junior Web Developer',
		company: 'Dr. Rajkumar’s Learning App',
		location: 'Bengaluru',
		employment: 'Full Time',
		period: 'Sep 2021 - Dec 2021',
	},
	{
		iconCompany: "company",
		iconLocation: "location",
		iconPeriod: "period",
		position: 'Web Development Intern',
		company: 'IonPixelz Web Solutions',
		location: 'Bengaluru',
		employment: 'Internship',
		period: 'Sep 2021 - Dec 2021',
	},
	{
		iconCompany: "company",
		iconLocation: "location",
		iconPeriod: "period",
		position: 'SEO / SEM Specialist',
		company: 'HAAPS',
		location: 'Bengaluru',
		employment: 'Internship',
		period: 'Sep 2021 - Dec 2021',
	},
	{
		iconCompany: "company",
		iconPeriod: "period",
		position: 'Bachelor in Electronics & Communication',
		company: 'Bangalore Instutute of Technology',
		employment: 'Full Time',
		period: 'Aug 2015 - Dec 2020',
	}
]

export const Abouts: React.FC = () => {

	const el = aboutData.map((a, index) => {
		return <About
			key={index}
			iconCompany={a.iconCompany}
			iconLocation={a.iconLocation}
			iconPeriod={a.iconPeriod}
			position={a.position}
			company={a.company}
			location={a.location}
			employment={a.employment}
			period={a.period}
		/>
	})

	const filteredData = el.filter((a, index) => {
		return index !== 3
	});

	return (
		<S.Abouts id='about'>
			<Container>
				<FlexWrapper direction='column' gap='40px' style={{ maxWidth: "710px" }}>
					<S.Title>About Me</S.Title>
					<S.Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</S.Text>
					<S.Title>Work Experience</S.Title>
					<FlexWrapper direction='column' gap='38px'>
						{filteredData}
						<S.Title>Education</S.Title>
						{el[3]}
					</FlexWrapper>
				</FlexWrapper>
			</Container>
		</S.Abouts >
	);
};