const version = process.env.VERSION || require('../package.json').version;
import components from 'ui/index';

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$HDVUE = {
        ui: (() => {
            if (window.Element) {
                return {
                    name: 'element-ui',
                    type: 'el'
                };
            }
        })()
    };
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const HDVUE = {
    version: version,
    install
};

export default HDVUE;
