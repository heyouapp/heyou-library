import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VideoProps } from 'components/core';
export interface CardVideoProps extends VideoProps {
    createdAt: string;
    recipientName: string;
    onShare: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const CardVideo: React.FC<CardVideoProps>;
export { CardVideo };
