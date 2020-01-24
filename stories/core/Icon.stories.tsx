import * as React from 'react';
import { StyleSheet } from 'react-native';

// Library
import { Icon } from 'components/core';
import { Colors } from 'utils';

export default {
    title: 'Core|Icon',
};

export const normal = () => <Icon name="profile" color={Colors.neutral} />;

export const withSize = () => (
    <Icon name="profile" color={Colors.neutral} style={styles.icon} />
);

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50,
    },
});
