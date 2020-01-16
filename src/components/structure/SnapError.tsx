import * as React from 'react';
import { StyleSheet, View } from 'react-native';

// Library
import { Text, Button } from 'components/core';
import { Colors } from 'utils';

interface SnapErrorProps {
    message: string;
    closeText?: string;
    onClose: () => void;
}

const SnapError = (props: SnapErrorProps) => (
    <View style={styles.container}>
        <Text type="semibold" style={styles.text}>
            {props.message}
        </Text>
        <Button type="secondary" position="end" small style={styles.button}>
            {props.closeText || 'OK'}
        </Button>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.error,
        padding: 15
    },
    text: {
        marginBottom: 15,
        color: Colors.white
    },
    button: {
        borderColor: 'transparent'
    }
});

export { SnapError };
