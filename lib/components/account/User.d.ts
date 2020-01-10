import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface UserProps {
    style?: StyleProp<ViewStyle>;
    fullName: string;
    userName: string;
}
declare const User: React.FC<UserProps>;
export { User };
