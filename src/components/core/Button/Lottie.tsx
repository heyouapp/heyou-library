import * as React from 'react';
import LottieNative from 'lottie-react-native';

// Library
import { Assets } from 'utils';

interface LottieProps {
    callback: () => void;
}

const Lottie: React.FC<LottieProps> = props => (
    <LottieNative
        source={Assets.checkAnimation}
        onAnimationFinish={props.callback}
        loop={false}
        autoPlay
    />
);

export default Lottie;
