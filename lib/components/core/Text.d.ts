import * as React from 'react';
import { TextProps as RNTextProps } from 'react-native';
export interface TextProps extends RNTextProps {
    uppercase?: boolean;
    type?: 'regular' | 'semibold' | 'bold';
    small?: boolean;
}
export declare const TextStyle: {
    fontSize: number;
    color: string;
    letterSpacing: number;
};
declare const Text: React.FC<TextProps>;
export { Text };
