import React from 'react';
import { S } from './HeaderMenu_Styles';
import { Icon } from '../../../components/icon/Icon';

type SocialMenuPropsType = {
	color: string
}

export const SocialMenu: React.FC<SocialMenuPropsType> = (props: SocialMenuPropsType) => {
	return (
		<S.SocialMenu color={props.color}>
			<S.SocialList>
				<S.SocialItem>
					<S.SocialLink>
						<Icon height='31px' width='31px' viewBox='0 0 31px 31px' iconId='github2' />
					</S.SocialLink>
				</S.SocialItem>
				<S.SocialItem>
					<S.SocialLink>
						<Icon height='31px' width='31px' viewBox='0 0 31px 31px' iconId='twitter' />
					</S.SocialLink>
				</S.SocialItem>
				<S.SocialItem>
					<S.SocialLink>
						<Icon height='31px' width='31px' viewBox='0 0 31px 31px' iconId='linkedin' />
					</S.SocialLink>
				</S.SocialItem>
			</S.SocialList>
		</S.SocialMenu>
	);
};