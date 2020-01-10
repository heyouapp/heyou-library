import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface CardProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}
declare const Card: React.FC<CardProps>;
export { Card };
