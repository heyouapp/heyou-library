import * as React from 'react';
import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { ProfilePictureSize } from "./ProfilePicture";
export interface TalentProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    fullName: string;
    mainTopic: string;
    talentFeeAmount: number;
    size?: ProfilePictureSize;
    source?: ImageSourcePropType;
}
declare const Talent: React.FC<TalentProps>;
export { Talent };
