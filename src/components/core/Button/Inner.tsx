import * as React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

// Library
import { Text, Icon } from 'components/core';
import { Colors } from 'utils';

// Common
import { ButtonProps } from './model';

export interface InnerProps extends ButtonProps {
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
            <>
                {props.type === 'facebook' && (
                    <Icon
                        name="facebook"
                        style={styles.icon}
                        color={Colors.white}
                    />
                )}
                <Text
                    style={[
                        styles.text,
                        styles[`${props.type || 'primary'}Text`],
                    ]}
                    type="semibold"
                    small>
                    {props.children}
                </Text>
            </>
        ) : (
            <ActivityIndicator
                color={
                    Colors[
                        !props.type || props.type === 'primary'
                            ? 'white'
                            : 'primary'
                    ]
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
        flexDirection: 'row',
    },
    containerSmall: {
        borderRadius: 15,
    },
    text: {
        textAlign: 'center',
    },
    primary: {
        backgroundColor: Colors.primary,
    },
    secondary: {
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
    },
    tertiary: {
        backgroundColor: Colors.secondary,
    },
    facebook: {
        backgroundColor: Colors.facebook,
    },
    primaryText: {
        color: Colors.white,
    },
    secondaryText: {
        color: Colors.primary,
    },
    tertiaryText: {
        color: Colors.primary,
    },
    facebookText: {
        color: Colors.white,
    },
    icon: {
        marginRight: 7,
    },
});

export default Inner;
