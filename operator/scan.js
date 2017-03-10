const scan = function(createObservable) {
    return function scan(reducer, initial) {
        const inputObservable = this;

        return createObservable((outputObserver) => {
            let acc = initial;
            inputObservable.subscribe({
                next: (i) => {
                    acc = reducer(acc, i);
                    outputObserver.next(acc);
                }
            });
        });
    };
};

module.exports = scan;
