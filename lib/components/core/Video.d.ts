import * as React from 'react';
export interface VideoProps {
    volume?: boolean;
    onVolumeChange?: () => void;
}
declare const Video: React.FC<VideoProps>;
export { Video };
