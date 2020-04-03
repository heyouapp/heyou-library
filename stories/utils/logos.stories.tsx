import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// Library
import { Text } from 'components/core';
import { Assets, Colors } from 'utils';
import { Container } from '../decorators';

export default {
    title: 'Utils/Logos',
    parameters: {
        info: { inline: false },
    },
    decorators: [Container],
};

export const list = () => (
    <View>
        {Object.keys(Assets.logos).map((logo: string, index: number) => (
            <View style={styles.item} key={index.toString()}>
                <Image
                    source={Assets.logos[logo]}
                    style={[
                        styles.image,
                        logo === 'symbolWhite' && styles.imageWhite,
                    ]}
                />
                <Text type="semibold">{logo}</Text>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    item: {
        padding: 10,
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    imageWhite: {
        backgroundColor: Colors.primary,
    },
});
