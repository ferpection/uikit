import React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Color } from '../../../colors';
export declare const Button: React.FC<ButtonProps>;
export interface ButtonProps {
    isFilled?: boolean;
    isDisabled?: boolean;
    isRaw?: boolean;
    color?: Color;
    hoverColor?: Color;
    icon?: IconName;
    iconStore?: IconPrefix;
    actionType?: 'action' | 'positive' | 'negative';
    to?: string;
    ariaLabel?: string;
    onClick?: (event: EventTarget) => void;
}
