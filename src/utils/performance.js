const _debounce = (func, ms) => {

}

// 节流
const _throttle = (ms = 300, isFirst = false) => {
    let tmp = 0;
    let first = isFirst;
    let flag = true;
    let timer = 0;
    let pretimer = timer;
    let waitFun = function () {
    }
    return (func) => {
        waitFun = func || function () {
        };

        if (flag) {
            flag = false;
            if (isFirst && first) {
                first = false;
                flag = true;
                waitFun();
                tmp = setTimeout(() => {
                    if (pretimer === timer) {
                        first = true;
                    }
                }, ms);
            } else {
                timer = setTimeout(() => {
                    flag = true;
                    waitFun();
                    if (isFirst) {
                        pretimer = timer;
                        tmp = setTimeout(() => {
                            if (pretimer === timer) {
                                first = true;
                            }
                        }, ms);
                    }
                }, ms);
            }
        }
    }
}

export const throttle = _throttle(1000,false);