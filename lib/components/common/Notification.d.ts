import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface NotificationProps {
    label: string;
    description: string;
    createdAt: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const Notification: React.FC<NotificationProps>;
export { Notification };
