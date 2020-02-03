import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface ListItemProps {
    label: string;
    value?: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}
declare const ListItem: React.FC<ListItemProps>;
export { ListItem };
