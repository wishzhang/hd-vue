const path = require('path');
const aliases = require('./alias');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

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
        entry: resolve('styles/index.scss'),
        dest: resolve('lib'),
        filename: 'hd-vue.min.css',
        env: 'production',
        optimization: {
            minimize: true
        }
    },
    dev: {
        entry: resolve('styles/index.scss'),
        dest: resolve('lib'),
        filename: 'hd-vue.css',
        env: 'development',
        optimization: {
            minimize: false
        }
    }
};

function genConfig(name) {
    const opts = builds[name];
    const config = {
        entry: opts.entry,
        output: {
            filename: opts.filename,
            path: opts.dest,
            libraryTarget: 'umd',
            library: 'HDVUE',
            umdNamedDefine: true
        },
        optimization: opts.optimization,
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                        use: ['css-loader', 'sass-loader']
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin(opts.filename),
            new ProgressBarPlugin(),
        ]
    };

    return config;
}

module.exports = genConfig(process.env.TARGET || 'prod');
