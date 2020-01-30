import * as React from 'react';
import { StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
export interface RequestProps {
    fullName: string;
    recipientLabel: string;
    status: string;
    buttonText: string;
    onPress: () => void;
    source?: ImageSourcePropType;
    style?: StyleProp<ViewStyle>;
}
declare const Request: React.FC<RequestProps>;
export { Request };
