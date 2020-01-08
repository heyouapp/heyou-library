import * as React from 'react';
import { TextInputProps } from 'react-native';
export interface InputProps extends TextInputProps {
    label?: string;
    uppercase?: boolean;
    error?: string;
}
export declare const InputStyle: {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
    borderWidth: number;
    borderColor: string;
    borderRadius: number;
    backgroundColor: string;
};
export declare const InputInnerStyle: {
    fontSize: number;
    color: string;
    letterSpacing: number;
    height: string;
    width: string;
    paddingHorizontal: number;
};
declare const Input: React.FC<InputProps>;
export { Input };
