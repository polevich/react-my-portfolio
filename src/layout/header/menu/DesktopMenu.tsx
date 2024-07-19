import React from 'react';
import { Menu } from './Menu';
import { S } from './HeaderMenu_Styles';

type MenuPropsType = {
	color: string
}

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
	return (
		<S.DesktopMenu>
			<Menu color={props.color} />
		</S.DesktopMenu>
	);
};
