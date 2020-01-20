import * as React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

// Library
import { Text, Button } from 'components/core';
import { Colors } from 'utils';

export interface SnapErrorProps {
    message: string;
    closeText?: string;
    onClose: () => void;
}

const SnapError = (props: SnapErrorProps) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text type="semibold" style={styles.text}>
                {props.message}
            </Text>
            <Button
                type="secondary"
                position="end"
                small
                onPress={props.onClose}
                style={styles.button}
            >
                {props.closeText || 'OK'}
            </Button>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.error,
        zIndex: 10
    },
    content: {
        padding: 15
    },
    text: {
        marginBottom: 10,
        color: Colors.white
    },
    button: {
        borderColor: 'transparent'
    }
});

export { SnapError };
