import * as React from 'react';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';

// Library
import { Colors } from 'utils';
import { Text } from 'components';

export interface BadgeProps {
    amount: string | number;
    style?: StyleProp<ViewStyle>;
}

const Badge: React.FC<BadgeProps> = props => (
    <View style={[styles.container, props.style]}>
        <Text style={styles.amount} type="semibold">
            {props.amount}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 9,
        backgroundColor: Colors.error,
        height: 18,
        minWidth: 18,
        paddingHorizontal: 3,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    amount: {
        paddingTop: 0,
        paddingLeft: 1,
        fontSize: 11,
        color: Colors.white,
        textAlign: 'center',
    },
});

export { Badge };
