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
            props.small && styles.containerSmall,
            props.style,
        ]}
        activeOpacity={0.7}>
        {props.state === 0 ? (
            <Text
                style={styles[`${props.type || 'primary'}Text`]}
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

const styles: { [key: string]: Object } = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 25,
        height: '100%',
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSmall: {
        borderRadius: 15,
    },
    primary: {
        backgroundColor: Colors.primary,
    },
    secondary: {
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
    },
    primaryText: {
        color: Colors.white,
    },
    secondaryText: {
        color: Colors.primary,
    },
});

export default Inner;
