import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Colors } from 'utils';

const Container = (storyFn: () => React.ReactNode) => (
    <View style={styles.container}>
        <View style={styles.content}>{storyFn()}</View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        padding: 45,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    content: {
        borderWidth: 1,
        borderColor: Colors.greyLight,
        backgroundColor: Colors.white,
        width: '70%',
        padding: 30,
    },
});

export default Container;
