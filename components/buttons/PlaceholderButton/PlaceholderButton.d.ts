import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
export declare const PlaceholderButton: React.FC<PlaceholderButtonProps>;
interface PlaceholderButtonProps {
    isDisabled?: boolean;
    to?: string;
    icon?: IconName | null;
    ariaLabel?: string;
    children?: string;
    onClick?: (event: Event) => void;
}
export {};
