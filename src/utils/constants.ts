export const userTypes = {
    user: 'USER',
    talent: 'TALENT',
};

export const recipientTypes = {
    someone: 0,
    myself: 1,
};

export const dateFormat = 'dd/MM/yyyy';

export const videoRequestTabs = {
    new: 'PENDING',
    completed: 'COMPLETED',
    cancelled: 'REJECTED',
    expired: 'EXPIRED',
};

export const videoRequestStatuses = {
    pending: 'PENDING',
    completed: 'COMPLETED',
    rejected: 'REJECTED',
    expired: 'EXPIRED',
};

export const statusPriceNames = {
    undefined: 'price',
    PENDING: 'charged',
    COMPLETED: 'charged',
    REJECTED: 'refunded',
    EXPIRED: 'refunded',
};

export const entityTypes = {
    USER: 'user',
    TOPIC: 'topic',
    TOPIC_CATEGORY: 'topic_category',
    COLLECTION: 'collection',
    COLLECTION_ITEM: 'collection_item',
    REVIEW: 'review',
    VIDEO: 'video',
    VIDEO_REQUEST: 'video_request',
    EVENT: 'event',
    FOLLOWER_ITEM: 'follower_item',
};

export const eventTypes = {
    userUpdated: 'USER_UPDATED',
    videoRequestCreated: 'VIDEO_REQUEST_CREATED',
    videoRequestCompleted: 'VIDEO_REQUEST_COMPLETED',
    videoRequestRejected: 'VIDEO_REQUEST_REJECTED',
    reviewCreated: 'REVIEW_CREATED',
    payoutTransferred: 'PAYOUT_TRANSFERRED',
};
