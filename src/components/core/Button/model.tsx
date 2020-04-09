import { StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
    type?: 'primary' | 'secondary' | 'tertiary';
    position?: 'start' | 'end';
    small?: boolean;
    loading?: boolean;
    withAnimation?: boolean;
    innerStyle?: StyleProp<ViewStyle>;
}
