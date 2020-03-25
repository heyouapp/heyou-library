import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { StyleSheet, View } from 'react-native';

// Library
import { BottomNav } from 'components/structure';
import { Container } from '../decorators';

export default {
    title: 'Structure/BottomNav',
    decorators: [Container],
};

export const normal = () => (
    <View style={styles.container}>
        <BottomNav
            data={[
                { name: 'home', onPress: action('clicked home') },
                { name: 'stream', onPress: action('clicked stream') },
                {
                    name: 'notifications',
                    onPress: action('clicked notifications'),
                    badgeCount: 20,
                },
                { name: 'profile', onPress: action('clicked profile') },
            ]}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 100,
    },
});
