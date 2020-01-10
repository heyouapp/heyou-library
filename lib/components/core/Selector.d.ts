import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface SelectorProps {
    data: string[];
    value?: number;
    onChange?: (index: number) => void;
    style?: StyleProp<ViewStyle>;
}
declare const Selector: React.FC<SelectorProps>;
export { Selector };
