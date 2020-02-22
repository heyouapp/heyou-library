import * as React from 'react';

// Library
import { ProfilePicture } from 'components/account';
import { Container } from '../decorators';

export default {
    title: 'Account/ProfilePicture',
    decorators: [Container],
};

export const small = () => <ProfilePicture />;

export const medium = () => <ProfilePicture size="md" rounded />;

export const smallSquared = () => <ProfilePicture />;

export const mediumSquared = () => <ProfilePicture size="md" />;

export const largeSquared = () => <ProfilePicture size="lg" />;

export const xlargeSquared = () => <ProfilePicture size="xl" />;
