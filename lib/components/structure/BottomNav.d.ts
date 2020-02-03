import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export declare type BottomNavOption = {
    iconName: string;
    onPress: () => void;
    active: boolean;
};
export interface BottomNavProps {
    data: BottomNavOption[];
    style?: StyleProp<ViewStyle>;
}
declare const BottomNav: React.FC<BottomNavProps>;
export { BottomNav };
