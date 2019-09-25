import React from 'react';
export declare const FormErrors: React.FC<FormErrorsProps>;
export interface FormErrorsProps {
    errors: {
        [errorKey: string]: any;
    };
}
