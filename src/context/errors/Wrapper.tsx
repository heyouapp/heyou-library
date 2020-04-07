import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const Wrapper: React.FC<React.ReactNode> = props => (
    <View style={styles.container}>{props.children}</View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
});

export default Wrapper;
