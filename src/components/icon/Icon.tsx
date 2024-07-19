import React from 'react';
import iconsSprite from "../../assets/image/icons-sprite.svg"
import styled from 'styled-components';
import { myTheme } from '../../styles/Theme';

type IconPropsType = {
	iconId?: string
	width?: string
	height?: string
	viewBox?: string
}

export const Icon = (props: IconPropsType) => {
	return (
		<IconWrapper width={props.width || "120"} height={props.height || "120"} viewBox={props.viewBox || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
			<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
		</IconWrapper>
	);
};


const IconWrapper = styled.svg < { width: string; height: string; viewBox: string } > `

@media ${myTheme.media.mobile} {
		width: ${({ width }) => `${Number(width) * 0.8}`};
    height: ${({ height }) => `${Number(height) * 0.8}`};
    viewBox: ${({ width, height }) => `0 0 ${Number(width) * 0.8} ${Number(height) * 0.8}`};
	}

`
