import * as React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import LottieWeb from 'react-lottie';
import LottieNative from 'lottie-react-native';

// Library
import { Assets } from 'utils';

interface LottieProps {
    callback: () => void;
}

const Lottie: React.FC<LottieProps> = props => {
    const callback = () => setTimeout(props.callback, 1000);

    return (
        <View style={styles.container}>
            {Platform.OS === 'web' ? (
                <LottieWeb
                    options={{
                        loop: false,
                        autoplay: true,
                        animationData: Assets.checkAnimation,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                        },
                    }}
                    eventListeners={[
                        {
                            eventName: 'complete',
                            callback,
                        },
                    ]}
                />
            ) : (
                <LottieNative
                    source={Assets.checkAnimation}
                    onAnimationFinish={callback}
                    autoPlay
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 150,
        transform: [{ translateY: -50 }, { translateX: 50 }],
        alignSelf: 'center',
    },
});

export { Lottie };
