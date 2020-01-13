import * as React from 'react';
import { ViewProps } from 'react-native';
export interface VideoProps extends ViewProps {
    volume: boolean;
    onVolumeChange: (volume: boolean) => void;
}
declare const Video: React.FC<VideoProps>;
export { Video };
