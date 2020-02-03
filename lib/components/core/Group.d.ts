import * as React from 'react';
export interface GroupProps {
    children: React.ReactNode;
    horizontal?: boolean;
    unit?: boolean;
}
declare const Group: React.FC<GroupProps>;
export { Group };
