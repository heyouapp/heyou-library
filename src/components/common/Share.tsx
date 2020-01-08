import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// Library
import { Icon } from 'components/core';
import { Colors } from 'utils';

export interface ShareProps {
    onPress?: () => void;
}

const Share: React.FC<ShareProps> = props => (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.container}
        activeOpacity={0.7}
    >
        <Icon name="share" color={Colors.white} style={styles.icon} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: Colors.primary,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 15,
        width: 15
    }
});

export { Share };
