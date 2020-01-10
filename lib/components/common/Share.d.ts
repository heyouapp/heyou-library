import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface ShareProps {
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const Share: React.FC<ShareProps>;
export { Share };
