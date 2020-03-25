import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieBase from 'react-lottie';

// Library
import { Assets } from 'utils';

interface LottieProps {
    callback: () => void;
}

const Lottie: React.FC<LottieProps> = props => (
    <View style={styles.animation}>
        <LottieBase
            options={{
                loop: false,
                autoplay: true,
                animationData: Assets.checkAnimation,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                },
            }}
            height={150}
            width={150}
            eventListeners={[
                {
                    eventName: 'complete',
                    callback: () => setTimeout(props.callback, 1000),
                },
            ]}
        />
    </View>
);

const styles = StyleSheet.create({
    animation: {
        transform: [{ translateY: -50 }, { translateX: 50 }],
    },
});

export { Lottie };
