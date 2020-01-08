import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
export interface ButtonProps extends TouchableOpacityProps {
    type?: 'primary' | 'secondary';
    position?: 'start' | 'end';
    small?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
