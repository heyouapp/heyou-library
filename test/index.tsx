import * as React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Text, Button, Header, SnapError } from 'heyou-library';

const App = () => {
    return (
        <View style={styles.container}>
            <SnapError message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <Header
                title="Hola"
                onPressBack={() => {}}
                onPressClose={() => {}}
            />
            <View style={styles.content}>
                <Text>Text test</Text>
                <Button>Test</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingHorizontal: 15
    }
});

export default App;
