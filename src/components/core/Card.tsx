import * as React from 'react';
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native';

// Library
import { Colors, Shadows } from 'utils';

export interface CardProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = props => (
    <View style={[styles.container, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: Colors.white,
        paddingVertical: 15,
        marginVertical: 7.5,
        ...Shadows.primary
    }
});

export { Card };
