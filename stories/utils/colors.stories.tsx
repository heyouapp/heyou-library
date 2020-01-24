import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text } from 'components/core';
import { Colors } from 'utils';

export default {
    title: 'Utils|Colors',
    parameters: {
        info: { inline: false },
    },
};

export const list = () => (
    <View style={styles.container}>
        <View>
            {Object.keys(Colors).map((color: string, index: number) => (
                <View style={styles.item} key={index.toString()}>
                    <View
                        style={[
                            styles.color,
                            { backgroundColor: Colors[color] },
                        ]}
                    />
                    <Text type="semibold">{color}</Text>
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
