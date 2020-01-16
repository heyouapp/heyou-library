/// <reference types="react" />
import { IconProps } from "../core";
export interface TabsBarIconProps extends IconProps {
    active?: boolean;
    onPress: () => void;
}
declare const TabsBarIcon: (props: TabsBarIconProps) => JSX.Element;
export { TabsBarIcon };
