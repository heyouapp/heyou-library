import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { StyleSheet, View } from 'react-native';

// Library
import { BottomNav } from 'components/structure';

export default {
    title: 'Structure|BottomNav',
};

export const normal = () => (
    <View style={styles.container}>
        <BottomNav
            data={[
                { iconName: 'home', onPress: action('clicked home') },
                { iconName: 'stream', onPress: action('clicked stream') },
                {
                    iconName: 'notifications',
                    onPress: action('clicked notifications'),
                },
                { iconName: 'profile', onPress: action('clicked profile') },
            ]}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 200,
    },
});
