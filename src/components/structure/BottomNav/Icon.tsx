import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// Library
import { Icon, IconProps, Badge } from 'components/core';
import { Colors } from 'utils';

export interface BottomNavIconProps extends IconProps {
    active?: boolean;
    onPress: () => void;
    badgeCount: number | string;
}

const BottomNavIcon: React.FC<BottomNavIconProps> = props => (
    <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.7}
        style={styles.container}>
        <View>
            {!!props.badgeCount && (
                <Badge amount={props.badgeCount} style={styles.badge} />
            )}
            <Icon
                {...props}
                color={Colors[props.active ? 'primary' : 'grey']}
                style={styles.icon}
            />
        </View>
        {props.active && <View style={styles.dot} />}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    icon: {
        height: 20,
    },
    dot: {
        borderRadius: 4,
        backgroundColor: Colors.primary,
        height: 8,
        width: 8,
        marginTop: 6,
    },
    badge: {
        position: 'absolute',
        transform: [{ translateY: -9 }, { translateX: 12 }],
        zIndex: 1,
    },
});

export { BottomNavIcon };
