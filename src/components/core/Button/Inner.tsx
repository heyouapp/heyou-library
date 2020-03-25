import * as React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
} from 'react-native';

// Library
import { Text } from 'components/core';
import { Colors } from 'utils';

export interface InnerProps extends TouchableOpacityProps {
    type?: 'primary' | 'secondary';
    small?: boolean;
    state: number;
}

const Inner: React.FC<InnerProps> = props => (
    <TouchableOpacity
        onPress={props.onPress}
        disabled={props.state !== 0 || props.disabled}
        style={[
            styles.container,
            styles[props.type || 'primary'],
            props.small && styles.small,
        ]}
        activeOpacity={0.7}>
        {props.state === 0 ? (
            <Text
                style={styles[`${props.type || 'primary'}_text`]}
                type="semibold"
                small>
                {props.children}
            </Text>
        ) : (
            <ActivityIndicator
                color={
                    (props.type !== 'secondary' && Colors.white) || undefined
                }
            />
        )}
    </TouchableOpacity>
);

const styles: any = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 25,
        height: '100%',
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    small: {
        borderRadius: 15,
    },
    primary: {
        backgroundColor: Colors.primary,
    },
    secondary: {
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
    },
    primary_text: {
        color: Colors.white,
    },
    secondary_text: {
        color: Colors.primary,
    },
});

export default Inner;
