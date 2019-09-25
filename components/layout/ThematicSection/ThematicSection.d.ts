import React from 'react';
import { ReactElementLike } from 'prop-types';
import { FerpectionBadgeIconProps } from '../../iconography/FerpectionBadgeIcon';
import { Color } from '../../../colors';
export declare const ThematicSection: React.FC<ThematicSectionProps>;
export interface ThematicSectionProps {
    title: string;
    actions?: ReactElementLike;
    badgeIcon?: FerpectionBadgeIconProps['icon'];
    badgeColor?: Color;
}
