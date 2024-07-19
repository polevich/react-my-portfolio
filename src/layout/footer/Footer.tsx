import React from 'react';
import { myTheme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { ReactComponent as LogoFooter } from '../../assets/image/logo_2.svg'
import { DesktopMenu } from '../header/menu/DesktopMenu';
import { SocialMenu } from '../header/menu/SocialMenu';
import { S } from './Footer_Styles';

export const Footer: React.FC = () => {
	return (
		<S.Footer>
			<Container>
				<S.FooterUp>
					<S.Link href="">
						<LogoFooter />
					</S.Link>
					<S.Box>
						<S.Phone href='tel:+91 12345 09876'>+91 12345 09876</S.Phone>
						<S.Email href="mailto:info@example.com">info@example.com</S.Email>
						<SocialMenu color={myTheme.colors.colorTitle} />
					</S.Box>
				</S.FooterUp>
				<S.FooterDown>
					<DesktopMenu color={myTheme.colors.colorTitle} />
					<S.Text>Designed and built by <S.FirstWord>Pavan MG</S.FirstWord> with <S.SecondWord>Love</S.SecondWord> & <S.ThirdWord>Coffee</S.ThirdWord></S.Text>
				</S.FooterDown>
			</Container>
		</S.Footer>
	);
};