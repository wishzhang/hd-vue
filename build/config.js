const path = require('path');
const aliases = require('./alias');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const version = process.env.VERSION || require('../package.json').version;
const banner =
    ' hd-vue v' +
    version +
    '\n' +
    ' (c) 2020-' +
    new Date().getFullYear() +
    ' wishzhang\n' +
    ' Released under the MIT License.\n';
const externals = {
    'vue': 'Vue',
    'element-ui': 'ELEMENT',
    'vue-pdf': 'pdf'
};
const resolve = p => {
    const base = p.split('/')[0];
    if (aliases[base]) {
        return path.resolve(aliases[base], p.slice(base.length + 1));
    } else {
        return path.resolve(__dirname, '../', p);
    }
};

const builds = {
    prod: {
        entry: resolve('src/index.js'),
        dest: resolve('lib'),
        filename: 'hd-vue.min',
        env: 'production',
        externals: externals,
        optimization: {
            minimize: true
        },
        devtool: '',
    },
    dev: {
        entry: resolve('src/index.js'),
        dest: resolve('lib'),
        filename: 'hd-vue',
        env: 'development',
        externals: externals,
        optimization: {
            minimize: false
        },
        devtool: 'inline-source-map'
    }
};

function genConfig(name) {
    const opts = builds[name];
    let config = {
        entry: {
            app: [opts.entry]
        },
        output: {
            filename: opts.filename + '.js',
            path: opts.dest,
            chunkFilename: '[name].js',
            libraryTarget: 'umd',
            library: 'HDVUE',
            umdNamedDefine: true
        },
        externals: opts.externals,
        plugins: [
            new ExtractTextPlugin(opts.filename + '.css'),
            new webpack.BannerPlugin(banner)
        ],
        optimization: opts.optimization,
        devtool: opts.devtool
    };
    if (opts.env) {
        config.plugins.push(
            new webpack.DefinePlugin({
                __ENV__: JSON.stringify(opts.env || 'production'),
                __UINAME__: JSON.stringify(process.env.UINAME || 'element-ui')
            })
        );
    }

    const isProd = /min\.js$/.test(opts.filename);
    if (!isProd) {
        config = Object.assign(config, {
            watch: true,
            watchOptions: {
                ignored: /node_modules/
            }
        })
    }

    return config;
}

module.exports = genConfig(process.env.TARGET || 'prod');
