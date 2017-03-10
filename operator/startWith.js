const startWith = function(createObservable) {
    return function(value) {
        const inputObservable = this;

        return createObservable((outputObserver) => {
            outputObserver.next(value);
            inputObservable.subscribe({
                next: (i) => outputObserver.next(i)
            });
        });
    };
};

module.exports = startWith;
