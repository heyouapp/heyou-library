import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VideoProps } from 'components/core';
import { ReviewProps } from 'components/common';
export interface RequestVideoProps extends VideoProps {
    review?: ReviewProps;
    completedAt: string;
    onShare: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const RequestVideo: React.FC<RequestVideoProps>;
export { RequestVideo };
