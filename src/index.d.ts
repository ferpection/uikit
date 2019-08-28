import React from 'react'

declare module '@ferpection/uikit' {
    interface Color {
      static fromHex(hex: string): Color

      constructor(red: number, green: number, blue: number, alfa?: number)

      toHex(): string
      toRGB(): string
      toRGBA(alfa?: number): string

      shade(rate?: number): string
    }

    export const R500_COLOR: Color
    export const R400_COLOR: Color
    export const R300_COLOR: Color
    export const R200_COLOR: Color
    export const R100_COLOR: Color
    export const C500_COLOR: Color
    export const C400_COLOR: Color
    export const C300_COLOR: Color
    export const C200_COLOR: Color
    export const C100_COLOR: Color
    export const C75_COLOR : Color
    export const C50_COLOR : Color
    export const C25_COLOR : Color
    export const C15_COLOR : Color
    export const G500_COLOR: Color
    export const G400_COLOR: Color
    export const G300_COLOR: Color
    export const G200_COLOR: Color
    export const Y500_COLOR: Color
    export const Y400_COLOR: Color
    export const Y300_COLOR: Color
    export const Y200_COLOR: Color
    export const O500_COLOR: Color
    export const O400_COLOR: Color
    export const O300_COLOR: Color
    export const O200_COLOR: Color
    export const O100_COLOR: Color
    export const O75_COLOR: Color
    export const O50_COLOR: Color
    export const O25_COLOR: Color
    export const P500_COLOR: Color
    export const P400_COLOR: Color
    export const P300_COLOR: Color
    export const P200_COLOR: Color
    export const B500_COLOR: Color
    export const B400_COLOR: Color
    export const B300_COLOR: Color
    export const B200_COLOR: Color
    export const N500_COLOR: Color
    export const N400_COLOR: Color
    export const N300_COLOR: Color
    export const N200_COLOR: Color
    export const N100_COLOR: Color
    export const N75_COLOR : Color

    export const PRIMARY_COLORSET: {
        CINNABAR: Color,
        ROBINS_EGG_BLUE: Color,
        SHAMROCK: Color,
        SUNGLOW: Color
    }

    export const SECONDARY_COLORSET: {
        AMETHYST: Color,
        PICTON_BLUE: Color,
        CRUSTA: Color,
        BLUE_LAGOON: Color,
        AQUA_HAZE: Color,
        PARIS_DAISY: Color,
    }

    export const FULL_COLORSET: {
        CINNABAR: Color,
        ROBINS_EGG_BLUE: Color,
        SHAMROCK: Color,
        SUNGLOW: Color,
        AMETHYST: Color,
        PICTON_BLUE: Color,
        CRUSTA: Color,
        BLUE_LAGOON: Color,
        AQUA_HAZE: Color,
        PARIS_DAISY: Color,
        BITTERSWEET: Color,
        MINE_SHAFT: Color,
        EMPEROR: Color,
        BOULDER: Color,
        SILVER_CHALICE: Color,
        ALTO: Color,
        SEASHELL: Color,
        TALL_POPPY: Color,
        ILLUSION: Color,
        LINEN: Color,
        SHERPA_BLUE: Color,
        BLUE_STONE: Color,
        SINBAD: Color,
        BLIZZARD_BLUE: Color,
        BOTTICELLI: Color,
        BLACK_SQUEEZE: Color,
        CHATHAMS_BLUE: Color,
        SAIL: Color,
        SELAGO: Color,
        JEWEL: Color,
        MAGIC_MINT: Color,
        WHITE_ICE: Color,
        RIPE_LEMON: Color,
        LEMON_CHIFFON: Color,
        ISLAND_SPICE: Color,
        EMINENCE: Color,
        FRENCH_LILAC: Color,
        SNUFF: Color,
        TIA_MARIA: Color,
        BRANDY_PUNCH: Color,
        LIGHT_APRICOT: Color,
        PEACH: Color,
        BRIDESMAID: Color,
        FLORAL_WHITE: Color,
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
        children?: string
    }

    export class Button extends React.Component<ButtonProps> {}

    interface PlaceholderButtonProps {
        isDisabled?: boolean
        icon?: string
        ariaLabel?: string
        to?: string
        children?: string
    }

    export class PlaceholderButton extends React.Component<PlaceholderButtonProps> {}

    interface HeaderLinkProps extends ButtonProps {
        headerLigthVersion?: boolean
    }

    export class HeaderLink extends React.Component<HeaderLinkProps> {}

    export const ThemeContext: React.Context<{
        colors: {
            action: Color
            positive: Color
            negative: Color
        }
    }>

    interface HeaderProps {
        homeUrl?: string
        isLightVersion?: boolean
    }

    export class Header extends React.Component<HeaderProps> {}

    export class FerpectionLogo extends React.Component<{
        color: Color
    }> {}

    interface Errors {
        [errorName: string]: {
            [dataName: string]: any
        }
    }

    export class FormErrors extends React.Component<{
        errors: Errors
    }> {}

    interface TextFieldProps {
        value?: string
        dataType?: 'email' | 'text'
        rowCount?: number
        placeholder?: string
        isDisabled?: boolean
        isHighlighted?: boolean
        isRequired?: boolean
        hideErrors?: boolean
        onValueChange?: (value: string) => void
        onErrors?: (errors: Errors) => void
    }

    export class TextField extends React.Component<TextFieldProps> {}

    interface SelectFieldProps {
        value?: string
        rowCount?: number
        placeholder?: string
        isDisabled?: boolean
        isHighlighted?: boolean
        isRequired?: boolean
        hideErrors?: boolean
        onValueChange?: (value: string) => void
        onErrors?: (errors: Errors) => void
    }

    export class SelectField extends React.Component<SelectFieldProps> {}

    interface TextFieldListProps {
        initalFieldCount?: number
        dataType?: 'email' | 'text'
        displayErrorStrategy?: 'hidden' | 'on-field' | 'on-list'
        placeholder?: string
        buttonText?: string
        isDisabled?: boolean
        isEditable?: boolean
        onValueChange?: (value: string) => void
        onErrors?: (errors: Errors) => void
    }

    export class TextFieldList extends React.Component<TextFieldListProps> {}

}

declare module '@ferpection/uikit/components' {

    interface Color {
      static fromHex(hex: string): Color

      constructor(red: number, green: number, blue: number, alfa?: number)

      toHex(): string
      toRGB(): string
      toRGBA(alfa?: number): string

      shade(rate?: number): string
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
        children?: string
    }

    export class Button extends React.Component<ButtonProps> {}

    interface PlaceholderButtonProps {
        isDisabled?: boolean
        icon?: string
        ariaLabel?: string
        to?: string
        children?: string
    }

    export class PlaceholderButton extends React.Component<PlaceholderButtonProps> {}

    interface HeaderLinkProps extends ButtonProps {
        headerLigthVersion?: boolean
    }

    export class HeaderLink extends React.Component<HeaderLinkProps> {}

    export const ThemeContext: React.Context<{
        colors: {
            action: Color
            positive: Color
            negative: Color
        }
    }>

    interface HeaderProps {
        homeUrl?: string
        isLightVersion?: boolean
    }

    export class Header extends React.Component<HeaderProps> {}

    export class FerpectionLogo extends React.Component<{
        color: Color
    }> {}

    interface Errors {
        [errorName: string]: {
            [dataName: string]: any
        }
    }

    export class FormErrors extends React.Component<{
        errors: Errors
    }> {}

    interface TextFieldProps {
        value?: string
        dataType?: 'email' | 'text'
        rowCount?: number
        placeholder?: string
        isDisabled?: boolean
        isHighlighted?: boolean
        isRequired?: boolean
        hideErrors?: boolean
        onValueChange?: (value: string) => void
        onErrors?: (errors: Errors) => void
    }

    export class TextField extends React.Component<TextFieldProps> {}

    interface SelectFieldProps {
        value?: string
        rowCount?: number
        placeholder?: string
        isDisabled?: boolean
        isHighlighted?: boolean
        isRequired?: boolean
        hideErrors?: boolean
        onValueChange?: (value: string) => void
        onErrors?: (errors: Errors) => void
    }

    export class SelectField extends React.Component<SelectFieldProps> {}

    interface TextFieldListProps {
        initalFieldCount?: number
        dataType?: 'email' | 'text'
        displayErrorStrategy?: 'hidden' | 'on-field' | 'on-list'
        placeholder?: string
        buttonText?: string
        isDisabled?: boolean
        isEditable?: boolean
        onValueChange?: (value: string) => void
        onErrors?: (errors: Errors) => void
    }

    export class TextFieldList extends React.Component<TextFieldListProps> {}
}

declare module '@ferpection/uikit/colors' {
    interface Color {
      static fromHex(hex: string): Color

      constructor(red: number, green: number, blue: number, alfa?: number)

      toHex(): string
      toRGB(): string
      toRGBA(alfa?: number): string

      shade(rate?: number): string
    }

    export const R500_COLOR: Color
    export const R400_COLOR: Color
    export const R300_COLOR: Color
    export const R200_COLOR: Color
    export const R100_COLOR: Color
    export const C500_COLOR: Color
    export const C400_COLOR: Color
    export const C300_COLOR: Color
    export const C200_COLOR: Color
    export const C100_COLOR: Color
    export const C75_COLOR : Color
    export const C50_COLOR : Color
    export const C25_COLOR : Color
    export const C15_COLOR : Color
    export const G500_COLOR: Color
    export const G400_COLOR: Color
    export const G300_COLOR: Color
    export const G200_COLOR: Color
    export const Y500_COLOR: Color
    export const Y400_COLOR: Color
    export const Y300_COLOR: Color
    export const Y200_COLOR: Color
    export const O500_COLOR: Color
    export const O400_COLOR: Color
    export const O300_COLOR: Color
    export const O200_COLOR: Color
    export const O100_COLOR: Color
    export const O75_COLOR: Color
    export const O50_COLOR: Color
    export const O25_COLOR: Color
    export const P500_COLOR: Color
    export const P400_COLOR: Color
    export const P300_COLOR: Color
    export const P200_COLOR: Color
    export const B500_COLOR: Color
    export const B400_COLOR: Color
    export const B300_COLOR: Color
    export const B200_COLOR: Color
    export const N500_COLOR: Color
    export const N400_COLOR: Color
    export const N300_COLOR: Color
    export const N200_COLOR: Color
    export const N100_COLOR: Color
    export const N75_COLOR : Color

    export const PRIMARY_COLORSET: {
        CINNABAR: Color,
        ROBINS_EGG_BLUE: Color,
        SHAMROCK: Color,
        SUNGLOW: Color
    }

    export const SECONDARY_COLORSET: {
        AMETHYST: Color,
        PICTON_BLUE: Color,
        CRUSTA: Color,
        BLUE_LAGOON: Color,
        AQUA_HAZE: Color,
        PARIS_DAISY: Color,
    }

    export const FULL_COLORSET: {
        CINNABAR: Color,
        ROBINS_EGG_BLUE: Color,
        SHAMROCK: Color,
        SUNGLOW: Color,
        AMETHYST: Color,
        PICTON_BLUE: Color,
        CRUSTA: Color,
        BLUE_LAGOON: Color,
        AQUA_HAZE: Color,
        PARIS_DAISY: Color,
        BITTERSWEET: Color,
        MINE_SHAFT: Color,
        EMPEROR: Color,
        BOULDER: Color,
        SILVER_CHALICE: Color,
        ALTO: Color,
        SEASHELL: Color,
        TALL_POPPY: Color,
        ILLUSION: Color,
        LINEN: Color,
        SHERPA_BLUE: Color,
        BLUE_STONE: Color,
        SINBAD: Color,
        BLIZZARD_BLUE: Color,
        BOTTICELLI: Color,
        BLACK_SQUEEZE: Color,
        CHATHAMS_BLUE: Color,
        SAIL: Color,
        SELAGO: Color,
        JEWEL: Color,
        MAGIC_MINT: Color,
        WHITE_ICE: Color,
        RIPE_LEMON: Color,
        LEMON_CHIFFON: Color,
        ISLAND_SPICE: Color,
        EMINENCE: Color,
        FRENCH_LILAC: Color,
        SNUFF: Color,
        TIA_MARIA: Color,
        BRANDY_PUNCH: Color,
        LIGHT_APRICOT: Color,
        PEACH: Color,
        BRIDESMAID: Color,
        FLORAL_WHITE: Color,
    }
}
