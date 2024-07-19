import React from 'react';
import { ReactComponent as MyLogo } from '../../assets/image/logo_1.svg'
import { animateScroll as scroll } from 'react-scroll';

export const Logo = () => {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a onClick={() => { scroll.scrollToTop() }} style={{ cursor: "pointer" }}>
			<MyLogo />
		</a>

	);
};