import React, { useState } from 'react';
import { Menu } from './Menu';
import { S } from './HeaderMenu_Styles';

type MenuPropsType = {
	color: string
}

export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
	const [meniIsOpen, setmenuIsOpen] = useState(false)
	const onBurgerBtnClick = () => { setmenuIsOpen(!meniIsOpen) }
	return (
		<S.MobileMenu>
			<S.BurgerButton isOpen={meniIsOpen} onClick={onBurgerBtnClick}>
				<span></span>
			</S.BurgerButton>

			<S.MobileMenuPopup isOpen={meniIsOpen} onClick={() => { setmenuIsOpen(false) }}>
				<Menu color={props.color} />
			</S.MobileMenuPopup>
		</S.MobileMenu>
	);
};
