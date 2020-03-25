import * as React from 'react';
import LottieWeb from 'react-lottie';

// Library
import { Assets } from 'utils';

interface LottieProps {
    callback: () => void;
}

const Lottie: React.FC<LottieProps> = props => (
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
                callback: props.callback,
            },
        ]}
    />
);

export default Lottie;
