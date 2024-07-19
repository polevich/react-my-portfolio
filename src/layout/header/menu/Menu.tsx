import React from 'react';
import { S } from './HeaderMenu_Styles';

const items = [
	{
		title: "Home",
		href: "home"
	},
	{
		title: "About",
		href: "about"
	},
	{
		title: "Tech Stack",
		href: "techstack"
	},
	{
		title: "Projects",
		href: "projects"
	},
	{
		title: "Contact",
		href: "contact"
	},
]

type MenuPropsType = {
	color: string
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
	return (
		<S.MenuList>
			{items.map((item, index) => {
				return (
					<S.ListItem key={index}>
						<S.NavLink
							color={props.color}
							activeClass="active"
							smooth={true}
							spy={true}
							to={item.href}
						>
							{item.title}
						</S.NavLink>
					</S.ListItem>)
			})}
		</S.MenuList>
	);
};
