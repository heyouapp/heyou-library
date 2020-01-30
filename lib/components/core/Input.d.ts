import * as React from 'react';
import { TextInputProps } from 'react-native';
export interface InputProps extends TextInputProps {
    label?: string;
    uppercase?: boolean;
    error?: string;
}
declare const Input: React.FC<InputProps>;
export { Input };
