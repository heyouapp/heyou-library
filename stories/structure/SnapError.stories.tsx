import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { SnapError } from 'components/structure';
import { Container } from '../decorators';

export default {
    title: 'Structure/SnapError',
    decorators: [Container],
};

export const normal = () => (
    <View style={styles.container}>
        <SnapError
            message="Lorem ipsum dolor sit aimet, com dalar tem quot sumin."
            onClose={() => {}}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 100,
    },
});
