import * as React from 'react';
import LottieNative from 'lottie-react-native';

// Common
import { LottieProps } from './model';

const Lottie: React.FC<LottieProps> = props => (
    <LottieNative
        {...props}
        source={props.source}
        onAnimationFinish={props.callback}
        loop={props.loop || false}
        autoPlay={props.autoPlay || true}
    />
);

export { Lottie };
