import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Projects_Styles';

type WorkPropsType = {
	title: string
	text: string
	src: string
	description: string
	techStack: string
}

export const Project: React.FC<WorkPropsType> = (props: WorkPropsType) => {
	return (
		<S.Project>
			<S.Image src={props.src} alt="" />
			<S.Box>
				<S.Title>{props.title}</S.Title>
				<S.Text>{props.text}</S.Text>
				<S.DeacriptionItem>
					<S.Description>{props.description}</S.Description>
					<S.TechStack>{props.techStack}</S.TechStack>
				</S.DeacriptionItem>
				<FlexWrapper gap='48px'>
					<S.Link href='#'>
						<Icon height='20px' width='20px' viewBox='0 0 20px 20px' iconId={"livePreview"} />
						Live Preview
					</S.Link>

					<S.Link href='#'>
						<Icon height='20px' width='20px' viewBox='0 0 20px 20px' iconId={"viewCode"} />
						View Code
					</S.Link>
				</FlexWrapper>
			</S.Box>
		</S.Project>
	);
};