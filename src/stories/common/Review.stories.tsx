import * as React from 'react';

// Library
import { Review } from '../../components/common';

export default {
    title: 'Common|Review'
};

export const normal = () => (
    <Review
        fullName={'Mario Rossi'}
        userName={'mariorossi'}
        rating={3}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    />
);
