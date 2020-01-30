import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { VideoProps } from "../core";
import { ReviewProps } from "./Review";
export interface RequestVideoProps extends VideoProps {
    review?: ReviewProps;
    completedLabel: string;
    onShare: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const RequestVideo: React.FC<RequestVideoProps>;
export { RequestVideo };
