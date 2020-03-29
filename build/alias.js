const path = require('path');

const resolve = p => path.resolve(__dirname, '../', p);

const uiname = process.env.UINAME;
module.exports = {
    src: resolve('src'),
    core: resolve('src/core'),
    global: resolve('src/global'),
    components: resolve('packages/' + uiname),
    ui: resolve('src/ui/' + uiname),
    utils: resolve('src/utils'),
    packages: resolve('packages')
};