import styled, { css } from "styled-components"
import { myTheme } from "../../../styles/Theme"
import { Link } from "react-scroll"

// Menu

const MenuList = styled.ul`
	display: flex;
	justify-content: space-between;
	
	gap: 20px;
	max-width: 609px;
	width: 100%;

	@media ${myTheme.media.mobile} {
		justify-content: flex-start;
		flex-wrap: wrap;
	}
`

const ListItem = styled.li`
	
`

const NavLink = styled(Link)<{ color: string }>`
	color: ${props => props.color};
	font-family: "DM Sans", sans-serif;
	font-weight: 500;
	font-size: 20px;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	opacity: 1;
	text-decoration: underline transparent;
	transition: ${myTheme.animations.transition};
	
	&:hover, &.active {
		text-decoration: underline;
		opacity: 0.8;
		color: ${myTheme.colors.colorTitle};
	}
`

// MobileMenu

const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 35, 0.9);
		display: flex;
		justify-content: center;
		align-items: center;
		transform: translateY(-100%);
    transition: 0.5s ease-in-out;

	ul {
		display: flex;
		gap: 10px;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		transition: ${myTheme.animations.transition};
	}

	${props => props.isOpen && css<{ isOpen: boolean }>`
		transform: translateY(0);

		& ul {
			gap: 30px;
		}
	`}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${myTheme.colors.colorText};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${myTheme.colors.colorText};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${myTheme.colors.colorText};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

// SocialMenu

const SocialMenu = styled.nav<{ color: string }>`
	color: ${props => props.color};
`

const SocialList = styled.ul`
	display: flex;
	gap: 20px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
	display: flex;
	align-items: center;
	transition: ${myTheme.animations.transition};

	&:hover {
		cursor: pointer;
		opacity: 0.9;
		transform: translateY(-2px);
	}
`

// DesktopMenu

const DesktopMenu = styled.nav`
	flex-grow: 1;
`

export const S = {
	MenuList,
	ListItem,
	NavLink,
	MobileMenu,
	MobileMenuPopup,
	BurgerButton,
	SocialMenu,
	SocialList,
	SocialItem,
	SocialLink,
	DesktopMenu,
}