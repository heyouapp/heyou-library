import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text } from 'components/core';
import { Colors } from 'utils';
import { Container } from '../decorators';

export default {
    title: 'Utils/Colors',
    parameters: {
        info: { inline: false },
    },
    decorators: [Container],
};

export const list = () => (
    <View>
        {Object.keys(Colors).map((color: string, index: number) => (
            <View style={styles.item} key={index.toString()}>
                <View
                    style={[styles.color, { backgroundColor: Colors[color] }]}
                />
                <Text type="semibold">
                    {Colors[color]} - {color}
                </Text>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    item: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    color: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.greyDark,
        height: 30,
        width: 30,
        marginRight: 10,
    },
});
