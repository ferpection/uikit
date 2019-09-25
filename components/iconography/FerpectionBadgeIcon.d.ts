import React from 'react';
import { Color } from '../../colors';
export declare const FerpectionBadgeIcon: React.FC<FerpectionBadgeIconProps>;
export interface FerpectionBadgeIconProps {
    borderColor: Color;
    icon: 'tasks' | 'test' | 'target' | 'screening' | 'post-test' | 'pre-test' | 'planning' | 'objectives' | 'incentive' | 'goals' | 'config';
}
