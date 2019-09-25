import React from 'react';
import { FormProps } from '../form-props';
export declare const TextField: React.FC<FormProps & TextFieldProps>;
export interface TextFieldProps {
    dataType?: 'text' | 'email';
    rowCount?: number;
    isHighlighted?: boolean;
    hideErrors?: boolean;
}
