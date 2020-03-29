const path = require('path');
const aliases = require('./alias');
const webpack = require('webpack');
const version = process.env.VERSION || require('../package.json').version;
const banner =
    ' hd-vue.js v' +
    version +
    '\n' +
    ' (c) 2020-' +
    new Date().getFullYear() +
    ' wishzhang\n' +
    ' Released under the MIT License.\n';
const externals = {
    'vue': 'Vue',
    'element-ui': 'ELEMENT'
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
        filename: 'hd-vue.min.js',
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
        filename: 'hd-vue.js',
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
            filename: opts.filename,
            path: opts.dest,
            chunkFilename: '[id].js',
            libraryTarget: 'umd',
            library: 'HDVUE',
            umdNamedDefine: true
        },
        externals: opts.externals,
        plugins: [
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
            watchOptions:{
                ignored: /node_modules/
            }
        })
    }

    return config;
}

module.exports = genConfig(process.env.TARGET || 'prod');
