import * as React from 'react';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    View,
    TouchableWithoutFeedback
} from 'react-native';

// Library
import { Colors, Shadows } from 'utils';

export interface CardProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

const Card: React.FC<CardProps> = props => (
    <TouchableWithoutFeedback onPress={props.onPress} disabled={!props.onPress}>
        <View style={[styles.container, props.style]}>{props.children}</View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: Colors.white,
        paddingVertical: 15,
        ...Shadows.primary
    }
});

export { Card };
