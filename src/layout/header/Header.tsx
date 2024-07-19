import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { myTheme } from '../../styles/Theme';
import { S } from './Header_Styles';
import { MobileMenu } from './menu/MobileMenu';
import { DesktopMenu } from './menu/DesktopMenu';
import { SocialMenu } from './menu/SocialMenu';



export const Header: React.FC = () => {

	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 768;

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);


	return (
		<S.Header>
			<Container>
				<FlexWrapper justify='space-between' align='center' gap='20px'>
					<a href="">
						<Logo />
					</a>

					{width < breakpoint ? <MobileMenu color={myTheme.colors.colorText} /> :
						<S.Box>
							<DesktopMenu color={myTheme.colors.colorText} />
							<SocialMenu color={myTheme.colors.colorText} />
						</S.Box>
					}

				</FlexWrapper>
			</Container>
		</S.Header>
	);
};

