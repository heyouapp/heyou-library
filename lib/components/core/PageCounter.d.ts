import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface PageCounterProps {
    amount: number;
    active: number;
    style?: StyleProp<ViewStyle>;
}
declare const PageCounter: React.FC<PageCounterProps>;
export { PageCounter };
