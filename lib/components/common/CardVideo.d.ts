import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VideoProps } from "../core";
export interface CardVideoProps extends VideoProps {
    createdLabel: string;
    recipientLabel: string;
    onShare: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const CardVideo: React.FC<CardVideoProps>;
export { CardVideo };
