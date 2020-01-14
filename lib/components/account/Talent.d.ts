import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ProfilePictureSize } from "./ProfilePicture";
export interface TalentProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    fullName: string;
    mainTopic: string;
    talentFeeAmount: number;
    size?: ProfilePictureSize;
}
declare const Talent: React.FC<TalentProps>;
export { Talent };
