import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

// Library
import { Icon, IconProps } from 'components/core';
import { Colors } from 'utils';

export interface TabsBarIconProps extends IconProps {
    active?: boolean;
    onPress: () => void;
}

const TabsBarIcon = (props: TabsBarIconProps) => (
    <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.7}
        style={styles.container}
    >
        <Icon
            {...props}
            color={Colors[props.active ? 'primary' : 'grey']}
            style={styles.icon}
        />
        {props.active && <View style={styles.dot} />}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
});

export default TabsBarIcon;
