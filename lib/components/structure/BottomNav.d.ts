/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
export declare type BottomNavOption = {
    iconName: string;
    onPress: () => void;
};
export interface BottomNavProps {
    data: BottomNavOption[];
    style?: StyleProp<ViewStyle>;
}
declare const BottomNav: (props: BottomNavProps) => JSX.Element;
export { BottomNav };