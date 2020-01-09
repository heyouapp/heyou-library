import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = (storyFn: () => React.ReactNode) => (
    <View style={styles.container}>{storyFn()}</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export { Container };
