const filter = function(createObservable) {
    return function(conditionFn) {
        const inputObservable = this;

        return createObservable((outputObserver) => {
            inputObservable.subscribe({
                next: (i) => {
                    if (conditionFn(i)) {
                        outputObserver.next(i);
                    }
                }
            });
        });
    };
};

module.exports = filter;
