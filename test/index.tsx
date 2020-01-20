import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'heyou-library';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Prueba de texto</Text>
            <Button>Prueba</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;
