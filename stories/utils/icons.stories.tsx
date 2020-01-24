import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text, Icon } from 'components/core';
import { Icons } from 'utils';

export default {
    title: 'Utils|Icons',
    parameters: {
        info: { inline: false },
    },
};

export const list = () => (
    <View style={styles.container}>
        <View>
            {Object.keys(Icons).map((icon: string, index: number) => (
                <View style={styles.item} key={index.toString()}>
                    <Icon name={icon} style={styles.icon} />
                    <Text type="semibold">{icon}</Text>
                </View>
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
    },
});
