import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Abouts_Styles';

type AboutPropsType = {
	position: string
	company: string
	location?: string
	employment: string
	period: string
	iconCompany: string
	iconLocation?: string
	iconPeriod: string
}

export const About: React.FC<AboutPropsType> = (props: AboutPropsType) => {
	return (
		<S.About>

			<FlexWrapper direction='row' justify='space-between'>
				<S.Position>{props.position}</S.Position>
				<S.Employment>{props.employment}</S.Employment>
			</FlexWrapper>

			<S.BoxGrid>
				<S.BoxItem style={{ gridArea: 'title' }}>
					<Icon height='12px' width='16px' viewBox='0 0 12px 16px' iconId={props.iconCompany} />
					<S.Company>{props.company}</S.Company>
				</S.BoxItem>
				<S.BoxItem style={{ gridArea: 'location' }}>
					<Icon height='12px' width='16px' viewBox='0 0 12px 16px' iconId={props.iconLocation} />
					<S.Location>{props.location}</S.Location>
				</S.BoxItem>
				<S.BoxItem style={{ gridArea: 'date', justifySelf: 'end' }}>
					<Icon height='12px' width='16px' viewBox='0 0 12px 16px' iconId={props.iconPeriod} />
					<S.Period>{props.period}</S.Period>
				</S.BoxItem>
			</S.BoxGrid>

		</S.About>
	);
};


