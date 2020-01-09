import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface TalentProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    fullName: string;
    principalTag: string;
    price: number;
}
declare const Talent: React.FC<TalentProps>;
export { Talent };