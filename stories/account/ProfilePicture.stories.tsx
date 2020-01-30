import * as React from 'react';

// Library
import { ProfilePicture } from 'components/account';
import { Container } from '../decorators';

export default {
    title: 'Account/ProfilePicture',
    decorators: [Container],
};

export const small = () => <ProfilePicture />;

export const medium = () => <ProfilePicture size="medium" />;

export const large = () => <ProfilePicture size="large" />;

export const smallSquared = () => <ProfilePicture squared />;

export const mediumSquared = () => <ProfilePicture size="medium" squared />;

export const largeSquared = () => <ProfilePicture size="large" squared />;
