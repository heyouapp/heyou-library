import * as React from 'react';
import { IconProps } from "../core";
export interface BottomNavIconProps extends IconProps {
    active?: boolean;
    onPress: () => void;
}
declare const BottomNavIcon: React.FC<BottomNavIconProps>;
export default BottomNavIcon;
