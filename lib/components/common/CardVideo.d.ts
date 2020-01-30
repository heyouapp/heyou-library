import * as React from 'react';
import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { VideoProps } from "../core";
export interface CardVideoProps extends VideoProps {
    createdLabel: string;
    recipientLabel: string;
    onShare: () => void;
    source?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
}
declare const CardVideo: React.FC<CardVideoProps>;
export { CardVideo };
