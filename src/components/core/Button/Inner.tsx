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

const Inner: React.FC<InnerProps> = props => {
    const isPrimary = props.type === 'secondary' || props.type === 'tertiary';

    return (
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
                    {props.type === 'apple' && (
                        <Text
                            style={[
                                styles.text,
                                styles[isPrimary ? 'primaryText' : 'whiteText'],
                                styles.appleLogo,
                            ]}>
                            
                        </Text>
                    )}
                    <Text
                        style={[
                            styles.text,
                            styles[isPrimary ? 'primaryText' : 'whiteText'],
                        ]}
                        type="semibold"
                        small>
                        {props.children}
                    </Text>
                </>
            ) : (
                <ActivityIndicator
                    color={Colors[isPrimary ? 'primary' : 'white']}
                />
            )}
        </TouchableOpacity>
    );
};

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
    apple: {
        backgroundColor: Colors.black,
    },
    appleLogo: {
        marginRight: 5,
        fontSize: 20,
    },
    whiteText: {
        color: Colors.white,
    },
    primaryText: {
        color: Colors.primary,
    },
    icon: {
        marginRight: 7,
    },
});

export default Inner;
