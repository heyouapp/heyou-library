import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface ReviewProps {
    style?: StyleProp<ViewStyle>;
    fullName: string;
    userName: string;
    rating: number;
    description: string;
}
declare const Review: React.FC<ReviewProps>;
export { Review };
