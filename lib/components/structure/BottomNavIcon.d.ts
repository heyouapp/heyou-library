/// <reference types="react" />
import { IconProps } from "../core";
export interface BottomNavIconProps extends IconProps {
    active?: boolean;
    onPress: () => void;
}
declare const BottomNavIcon: (props: BottomNavIconProps) => JSX.Element;
export default BottomNavIcon;
