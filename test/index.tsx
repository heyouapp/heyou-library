import * as React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Text, Button, Header, SnapError } from 'heyou-library';

const App = () => {
    const [snap, setSnap] = React.useState(false);

    return (
        <>
            {snap && (
                <SnapError
                    message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    onClose={() => setSnap(!snap)}
                />
            )}

            <Header
                title="Title"
                onPressBack={() => {}}
                onPressClose={() => {}}
            />
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text>Text test</Text>
                    <Button onPress={() => setSnap(!snap)}>Toggle Snap</Button>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        flex: 1,
    },
});

export default App;
