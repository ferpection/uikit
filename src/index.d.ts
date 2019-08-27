import React from 'react'

declare module '@ferpection/uikit' {

    export const R500_COLOR: string
    export const R400_COLOR: string
    export const R300_COLOR: string
    export const R200_COLOR: string
    export const R100_COLOR: string
    export const C500_COLOR: string
    export const C400_COLOR: string
    export const C300_COLOR: string
    export const C200_COLOR: string
    export const C100_COLOR: string
    export const C75_COLOR : string
    export const C50_COLOR : string
    export const C25_COLOR : string
    export const C15_COLOR : string
    export const G500_COLOR: string
    export const G400_COLOR: string
    export const G300_COLOR: string
    export const G200_COLOR: string
    export const Y500_COLOR: string
    export const Y400_COLOR: string
    export const Y300_COLOR: string
    export const Y200_COLOR: string
    export const O500_COLOR: string
    export const O400_COLOR: string
    export const O300_COLOR: string
    export const O200_COLOR: string
    export const O100_COLOR: string
    export const O75_COLOR: string
    export const O50_COLOR: string
    export const O25_COLOR: string
    export const P500_COLOR: string
    export const P400_COLOR: string
    export const P300_COLOR: string
    export const P200_COLOR: string
    export const B500_COLOR: string
    export const B400_COLOR: string
    export const B300_COLOR: string
    export const B200_COLOR: string
    export const N500_COLOR: string
    export const N400_COLOR: string
    export const N300_COLOR: string
    export const N200_COLOR: string
    export const N100_COLOR: string
    export const N75_COLOR : string

    export const PRIMARY_COLORSET: {
        CINNABAR: string,
        ROBINS_EGG_BLUE: string,
        SHAMROCK: string,
        SUNGLOW: string
    }

    export const SECONDARY_COLORSET: {
        AMETHYST: string,
        PICTON_BLUE: string,
        CRUSTA: string,
        BLUE_LAGOON: string,
        AQUA_HAZE: string,
        PARIS_DAISY: string,
    }

    export const FULL_COLORSET: {
        CINNABAR: string,
        ROBINS_EGG_BLUE: string,
        SHAMROCK: string,
        SUNGLOW: string,
        AMETHYST: string,
        PICTON_BLUE: string,
        CRUSTA: string,
        BLUE_LAGOON: string,
        AQUA_HAZE: string,
        PARIS_DAISY: string,
        BITTERSWEET: string,
        MINE_SHAFT: string,
        EMPEROR: string,
        BOULDER: string,
        SILVER_CHALICE: string,
        ALTO: string,
        SEASHELL: string,
        TALL_POPPY: string,
        ILLUSION: string,
        LINEN: string,
        SHERPA_BLUE: string,
        BLUE_STONE: string,
        SINBAD: string,
        BLIZZARD_BLUE: string,
        BOTTICELLI: string,
        BLACK_SQUEEZE: string,
        CHATHAMS_BLUE: string,
        SAIL: string,
        SELAGO: string,
        JEWEL: string,
        MAGIC_MINT: string,
        WHITE_ICE: string,
        RIPE_LEMON: string,
        LEMON_CHIFFON: string,
        ISLAND_SPICE: string,
        EMINENCE: string,
        FRENCH_LILAC: string,
        SNUFF: string,
        TIA_MARIA: string,
        BRANDY_PUNCH: string,
        LIGHT_APRICOT: string,
        PEACH: string,
        BRIDESMAID: string,
        FLORAL_WHITE: string,
    }

    interface ButtonProps {
        isFilled?: boolean
        isRaw?: boolean
        isDisabled?: boolean
        color?: string
        hoverColor?: string
        icon?: string
        iconStore?: 'fas'|'fab'
        ariaLabel?: string
        actionType?: 'default'|'positive'|'negative'
        to?: string
    }

    export class Button extends React.Component<ButtonProps> {}

    interface HeaderLinkProps extends ButtonProps {
        headerLigthVersion?: boolean
    }

    export class HeaderLink extends React.Component<HeaderLinkProps> {}

    export const ThemeContext: React.Context<{
        colors: {
            action: string
            positive: string
            negative: string
        }
    }>

    interface HeaderProps {
        homeUrl?: string
        isLightVersion?: boolean
    }

    export class Header extends React.Component<HeaderProps> {}

    export class FerpectionLogo extends React.Component<{
        color: string
    }> {}

    interface Errors {
        [errorName: string]: {
            [dataName: string]
        }
    }

    export class FormErrors extends React.Component<{
        errors: Errors
    }> {}

    interface TextFieldProps {
        dataType: string
        rowCount: number
        placeholder: string
        isDisabled: boolean
        isHighlighted: boolean
        onValueChange: (value: string) => void
        OnErrors: (errors: Errors) => void
    }

    export class TextField extends React.Component<TextFieldProps> {}

}

declare module '@ferpection/uikit/components' {

    interface ButtonProps {
        isFilled?: boolean
        isRaw?: boolean
        isDisabled?: boolean
        color?: string
        hoverColor?: string
        icon?: string
        iconStore?: 'fas'|'fab'
        ariaLabel?: string
        actionType?: 'default'|'positive'|'negative'
        to?: string
    }

    export class Button extends React.Component<ButtonProps> {}

    interface HeaderLinkProps extends ButtonProps {
        headerLigthVersion?: boolean
    }

    export class HeaderLink extends React.Component<HeaderLinkProps> {}

    export const ThemeContext: React.Context<{
        colors: {
            action: string
            positive: string
            negative: string
        }
    }>

    interface HeaderProps {
        homeUrl?: string
        isLightVersion?: boolean
    }

    export class Header extends React.Component<HeaderProps> {}

    export class FerpectionLogo extends React.Component<{
        color: string
    }> {}
}

declare module '@ferpection/uikit/colors' {
    export const R500_COLOR: string
    export const R400_COLOR: string
    export const R300_COLOR: string
    export const R200_COLOR: string
    export const R100_COLOR: string
    export const C500_COLOR: string
    export const C400_COLOR: string
    export const C300_COLOR: string
    export const C200_COLOR: string
    export const C100_COLOR: string
    export const C75_COLOR : string
    export const C50_COLOR : string
    export const C25_COLOR : string
    export const C15_COLOR : string
    export const G500_COLOR: string
    export const G400_COLOR: string
    export const G300_COLOR: string
    export const G200_COLOR: string
    export const Y500_COLOR: string
    export const Y400_COLOR: string
    export const Y300_COLOR: string
    export const Y200_COLOR: string
    export const O500_COLOR: string
    export const O400_COLOR: string
    export const O300_COLOR: string
    export const O200_COLOR: string
    export const O100_COLOR: string
    export const O75_COLOR: string
    export const O50_COLOR: string
    export const O25_COLOR: string
    export const P500_COLOR: string
    export const P400_COLOR: string
    export const P300_COLOR: string
    export const P200_COLOR: string
    export const B500_COLOR: string
    export const B400_COLOR: string
    export const B300_COLOR: string
    export const B200_COLOR: string
    export const N500_COLOR: string
    export const N400_COLOR: string
    export const N300_COLOR: string
    export const N200_COLOR: string
    export const N100_COLOR: string
    export const N75_COLOR : string

    export const PRIMARY_COLORSET: {
        CINNABAR: string,
        ROBINS_EGG_BLUE: string,
        SHAMROCK: string,
        SUNGLOW: string
    }

    export const SECONDARY_COLORSET: {
        AMETHYST: string,
        PICTON_BLUE: string,
        CRUSTA: string,
        BLUE_LAGOON: string,
        AQUA_HAZE: string,
        PARIS_DAISY: string,
    }

    export const FULL_COLORSET: {
        CINNABAR: string,
        ROBINS_EGG_BLUE: string,
        SHAMROCK: string,
        SUNGLOW: string,
        AMETHYST: string,
        PICTON_BLUE: string,
        CRUSTA: string,
        BLUE_LAGOON: string,
        AQUA_HAZE: string,
        PARIS_DAISY: string,
        BITTERSWEET: string,
        MINE_SHAFT: string,
        EMPEROR: string,
        BOULDER: string,
        SILVER_CHALICE: string,
        ALTO: string,
        SEASHELL: string,
        TALL_POPPY: string,
        ILLUSION: string,
        LINEN: string,
        SHERPA_BLUE: string,
        BLUE_STONE: string,
        SINBAD: string,
        BLIZZARD_BLUE: string,
        BOTTICELLI: string,
        BLACK_SQUEEZE: string,
        CHATHAMS_BLUE: string,
        SAIL: string,
        SELAGO: string,
        JEWEL: string,
        MAGIC_MINT: string,
        WHITE_ICE: string,
        RIPE_LEMON: string,
        LEMON_CHIFFON: string,
        ISLAND_SPICE: string,
        EMINENCE: string,
        FRENCH_LILAC: string,
        SNUFF: string,
        TIA_MARIA: string,
        BRANDY_PUNCH: string,
        LIGHT_APRICOT: string,
        PEACH: string,
        BRIDESMAID: string,
        FLORAL_WHITE: string,
    }
}
