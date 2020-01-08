import * as React from 'react';
import { StyleProp, ImageStyle } from 'react-native';
export interface IconProps {
    name: string;
    color?: string;
    style?: StyleProp<ImageStyle>;
}
declare const Icon: React.FC<IconProps>;
export { Icon };
