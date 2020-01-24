const path = require('path');

module.exports = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/preset-typescript',
            options: {
                tsDocgenLoaderOptions: {
                    tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
                    propFilter: prop => {
                        if (prop.parent) {
                            return !prop.parent.fileName.includes(
                                'node_modules',
                            );
                        }

                        return true;
                    },
                    shouldExtractLiteralValuesFromEnum: true,
                },
                include: [path.resolve(__dirname, '../src')],
            },
        },
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx|mjs|web.js|android.js|ios.js)$/,
            exclude: [/node_modules/],
            loader: require.resolve('babel-loader'),
            options: {
                cacheDirectory: true,
                babelrc: false,
                plugins: [['react-native-web', { commonjs: true }]],
            },
        });

        return config;
    },
};
