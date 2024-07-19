import React from 'react';
import photo from './../../../assets/image/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
	return (
		<S.Main id='home'>
			<Container>
				<FlexWrapper align='center' justify='space-between' wrap='wrap'>
					<S.StyledText >
						<span>Hi 👋,</span>
						<span>My name is</span>
						<S.Name>Pavan MG</S.Name>
						<S.MainTitle>
							<p>I build things for web</p>
							<Typewriter
								options={{
									strings: ['I build things for web'],
									autoStart: true,
									loop: true,
									delay: 150,
								}}
							/>
						</S.MainTitle>
					</S.StyledText>
					<S.PhotoWrapper>
						<S.Photo src={photo} alt="My photo" />
					</S.PhotoWrapper>
				</FlexWrapper>
			</Container>
		</S.Main >
	);
};