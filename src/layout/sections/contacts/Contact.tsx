import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Contacts_Styles';

export const Contact: React.FC = () => {
	return (
		<S.Contact id='contact'>
			<Container>
				<FlexWrapper direction='column' justify='center' align='center' gap='9px'>
					<S.Question>For any questions please mail me:</S.Question>
					<S.Email>hi@pavanmg.in</S.Email>
				</FlexWrapper>
			</Container>
		</S.Contact>
	);
};