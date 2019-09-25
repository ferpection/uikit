import React from 'react';
import { TextFieldProps } from '../TextField/TextField';
import { FormProps } from '../form-props';
export declare const TextFieldList: React.FC<FormProps & TextFieldListProps>;
export interface TextFieldListProps {
    dataType?: TextFieldProps['dataType'];
    isEditable?: boolean;
    initalFieldCount?: number;
    buttonText?: string;
    displayErrorStrategy?: 'hidden' | 'on-field' | 'on-list';
    onValueChange: (values: string[]) => void;
}
