import * as React from 'react';
export interface TagProps {
    children: string;
    active?: boolean;
    onDelete?: () => void;
}
declare const Tag: React.FC<TagProps>;
export { Tag };
