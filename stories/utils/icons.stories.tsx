import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text, Icon } from 'components/core';
import { Container } from '../decorators';

export default {
    title: 'Utils/Icons',
    parameters: {
        info: { inline: false },
    },
    decorators: [Container],
};

const iconsList = [
    'arrowUp',
    'arrowDown',
    'arrowLeft',
    'arrowRight',
    'arrowBack',
    'close',
    'menu',
    'home',
    'notifications',
    'profile',
    'stream',
    'refresh',
    'camera',
    'share',
    'starEmpty',
    'starFull',
    'film',
    'horn',
    'gift',
    'smile',
    'search',
    'filter',
    'play',
    'pause',
    'volumeOff',
    'volumeOn',
    'google',
    'facebook',
    'instagram',
    'apple',
    'paypal',
    'stripe',
];

export const list = () => (
    <View>
        {iconsList.map((icon: string, index: number) => (
            <View style={styles.item} key={index.toString()}>
                <Icon name={icon} style={styles.icon} />
                <Text type="semibold">{icon}</Text>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
    },
});
