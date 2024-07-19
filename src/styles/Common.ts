import { myTheme } from "./Theme"


type FontPropsType = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
  font-family: ${family || "Poppins"};
  font-weight: ${weight || 400};
  color: ${color || myTheme.colors.colorBlack};
  line-height: ${lineHeight || 1.2};

  font-size: calc( (100vw - 360px)/(1200 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );

	@media (max-width: 360px) {
    font-size: 36px;
  }
		
  @media (min-width: 1200px) {
    font-size: 58px;
  }
`
