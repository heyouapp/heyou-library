/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
export declare type TabsBarOption = {
    iconName: string;
    onPress: () => void;
};
export interface TabsBarProps {
    data: TabsBarOption[];
    style?: StyleProp<ViewStyle>;
}
declare const TabsBar: (props: TabsBarProps) => JSX.Element;
export { TabsBar };
