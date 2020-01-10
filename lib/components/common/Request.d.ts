import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface RequestProps {
    fullName: string;
    recipientName: string;
    createdAt: string;
    completedAt: string;
    expiresAt: string;
    refusedAt: string;
    status: 'pending' | 'completed' | 'rejected' | 'expired';
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const Request: React.FC<RequestProps>;
export { Request };
