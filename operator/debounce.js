const debounce = function(createObservable) {
    return function(milliseconds) {
        const inputObservable = this;

        return createObservable((outputObserver) => {
            inputObservable.subscribe({
                next: (i) => {
                    setTimeout(() => outputObserver.next(i), milliseconds);
                }
            });
        });
    };
};

module.exports = debounce;
