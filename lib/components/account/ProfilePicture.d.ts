import * as React from 'react';
import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
export interface ProfilePictureProps {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    squared?: boolean;
    src?: ImageSourcePropType;
}
declare const ProfilePicture: React.FC<ProfilePictureProps>;
export { ProfilePicture };
