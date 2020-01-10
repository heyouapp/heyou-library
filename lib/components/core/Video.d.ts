import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface VideoProps {
    volume: boolean;
    onVolumeChange: (volume: boolean) => void;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
declare const Video: React.FC<VideoProps>;
export { Video };
