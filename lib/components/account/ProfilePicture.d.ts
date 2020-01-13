import * as React from 'react';
import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
export declare type ProfilePictureSize = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
export interface ProfilePictureProps {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    size?: ProfilePictureSize;
    squared?: boolean;
    src?: ImageSourcePropType;
}
declare const ProfilePicture: React.FC<ProfilePictureProps>;
export { ProfilePicture };
