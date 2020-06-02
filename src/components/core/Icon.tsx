import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const expoAssetId = require('assets/font/heyou.ttf');
const Icon = createIconSetFromIcoMoon(
    require('assets/font/selection.json'),
    'heyou',
    expoAssetId,
);

export { Icon };
