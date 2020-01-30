import * as React from 'react';
import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
export interface NotificationProps {
    label: string;
    description: string;
    createdLabel: string;
    onPress?: () => void;
    source?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
}
declare const Notification: React.FC<NotificationProps>;
export { Notification };
