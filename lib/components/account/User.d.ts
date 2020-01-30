import * as React from 'react';
import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
export interface UserProps {
    style?: StyleProp<ViewStyle>;
    fullName: string;
    userName: string;
    source?: ImageSourcePropType;
}
declare const User: React.FC<UserProps>;
export { User };
