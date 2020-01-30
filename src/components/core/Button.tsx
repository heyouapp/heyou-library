import * as React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

// Library
import { Text } from './Text';
import { Colors } from 'utils';

export interface ButtonProps extends TouchableOpacityProps {
    type?: 'primary' | 'secondary';
    position?: 'start' | 'end';
    small?: boolean;
}

export const Button: React.FC<ButtonProps> = props => (
    <TouchableOpacity
        {...props}
        activeOpacity={0.7}
        style={[
            styles.container,
            styles[props.type || 'primary'],
            props.position ? styles[props.position] : null,
            props.small ? styles.small : null,
            props.style,
        ]}
    >
        <Text
            style={styles[`${props.type || 'primary'}_text`]}
            type="semibold"
            small
        >
            {props.children}
        </Text>
    </TouchableOpacity>
);

const styles: any = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: Colors.primary,
    },
    primary_text: {
        color: Colors.white,
    },
    secondary: {
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
    },
    secondary_text: {
        color: Colors.primary,
    },
    small: {
        borderRadius: 15,
        height: 30,
    },
    start: {
        alignSelf: 'flex-start',
    },
    end: {
        alignSelf: 'flex-end',
    },
});
