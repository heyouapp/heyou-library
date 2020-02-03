import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';

// Library
import { Text, Button } from 'components/core';
import { Colors } from 'utils';

export interface SnapErrorProps {
    message: string;
    closeText?: string;
    onClose: () => void;
}

const SnapError: React.FC<SnapErrorProps> = props => (
    <SafeAreaView
        style={[
            styles.container,
            Platform.OS === 'web'
                ? styles.container_web
                : styles.container_mobile,
        ]}
    >
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
        backgroundColor: Colors.error,
    },
    container_mobile: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    container_web: {
        borderRadius: 15,
    },
    content: {
        padding: 15,
    },
    text: {
        marginBottom: 10,
        color: Colors.white,
    },
    button: {
        borderColor: 'transparent',
    },
});

export { SnapError };
