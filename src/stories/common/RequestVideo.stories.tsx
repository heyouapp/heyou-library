import * as React from 'react';

// Library
import { RequestVideo } from 'components/common';

export default {
    title: 'Common|RequestVideo'
};

export const normal = () => <RequestVideo />;

export const withReview = () => <RequestVideo review></RequestVideo>;
