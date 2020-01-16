import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { BlurView } from 'expo-blur';

// Library
import { Shadows } from 'utils';

const uri =
    'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

const TabsBar = () => {
    return (
        <View style={styles.container}>
            <Image style={{ width: 192, height: 192 }} source={{ uri }} />

            {/* Adjust the tint and intensity */}
            <BlurView tint="light" intensity={50}>
                <Image style={{ width: 96, height: 96 }} source={{ uri }} />
            </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    absolute: {}
});

export { TabsBar };
