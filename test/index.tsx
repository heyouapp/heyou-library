import * as React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {
    Text,
    Button,
    Header,
    SnapError,
    BottomNav,
    ListItem,
} from 'heyou-library';

const App = () => {
    const [snap, setSnap] = React.useState(false);

    return (
        <View style={styles.container}>
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
            <View style={styles.content}>
                <Text>Text test</Text>
                <Button onPress={() => setSnap(!snap)}>Toggle Snap</Button>
                <ListItem label="Test label" value="" onPress={() => {}} />
                <ListItem label="Test label" onPress={() => {}} />
            </View>
            <BottomNav
                data={[
                    {
                        iconName: 'home',
                        onPress: () => console.log('clicked home'),
                    },
                    {
                        iconName: 'stream',
                        onPress: () => console.log('clicked stream'),
                    },
                    {
                        iconName: 'notifications',
                        onPress: () => console.log('clicked notifications'),
                    },
                    {
                        iconName: 'profile',
                        onPress: () => console.log('clicked profile'),
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 15,
    },
    bottomNav: {
        position: 'absolute',
        left: 15,
        right: 15,
        bottom: 15,
    },
});

export default App;
