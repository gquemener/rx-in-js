const operators = require('./operator');

const createObservable = function(subscribe) {
    return {
        subscribe: subscribe,
        map: operators.map(createObservable),
        filter: operators.filter(createObservable),
        scan: operators.scan(createObservable),
        debounce: operators.debounce(createObservable),
        startWith: operators.startWith(createObservable),
    };
};

module.exports = createObservable;
