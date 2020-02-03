import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface GroupProps {
    children: React.ReactNode;
    horizontal?: boolean;
    unit?: boolean;
    style?: StyleProp<ViewStyle>;
}
declare const Group: React.FC<GroupProps>;
export { Group };
