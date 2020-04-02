// 防抖
export const _debounce = (delay, immediate = false) => {
    let preTime = 0;
    let timer = 0;
    return (func) => {
        let nowTime = new Date().getTime();

        if (immediate) {
            immediate = false;
            func();
        }

        if (nowTime - preTime < delay) {
            preTime = nowTime;
            clearInterval(timer);
        }
        timer = setTimeout(() => {
            immediate = true;
            func();
        }, delay);
    }
}

// 节流
export const _throttle = (delay = 300, immediate = false) => {
    let first = immediate;
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
            if (immediate && first) {
                first = false;
                flag = true;
                waitFun();
                setTimeout(() => {
                    if (pretimer === timer) {
                        first = true;
                    }
                }, delay);
            } else {
                timer = setTimeout(() => {
                    flag = true;
                    waitFun();
                    if (immediate) {
                        pretimer = timer;
                        setTimeout(() => {
                            if (pretimer === timer) {
                                first = true;
                            }
                        }, delay);
                    }
                }, delay);
            }
        }
    }
}

export const defaultThrottle = _throttle(1000, false);
export const defaultDebounce = _debounce(1000, false);