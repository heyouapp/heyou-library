import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface TagProps {
    children: string;
    active?: boolean;
    delete?: boolean;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const Tag: React.FC<TagProps>;
export { Tag };
