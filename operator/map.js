const map = function(createObservable) {
    return function(transformFn) {
        const inputObservable = this;

        return createObservable((outputObserver) => {
            inputObservable.subscribe({
                next: (i) => outputObserver.next(transformFn(i))
            });
        });
    }
};

module.exports = map;
