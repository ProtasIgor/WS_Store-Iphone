
(function () {

    document.addEventListener('DOMContentLoaded', load);

    window.addEventListener('resize', debounce(load));
}());

function debounce(func, wait = 500, isImmediate = false) {
    let timeout;

    return function () {
        const context = this;

        const args = arguments;

        const later = function () {
            timeout = null;

            if (!isImmediate) {
                func.apply(context, args)
            }
        }

        const callNow = isImmediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait)

        if (callNow) {
            func.apply(context, args);
        }
    }
}

function load() {
    let heightUnit = `${(document.documentElement.clientHeight * 0.01).toFixed(3)}`;

    document.querySelector('.header__inner').style.setProperty('height', `${heightUnit * 100}px`);
}
