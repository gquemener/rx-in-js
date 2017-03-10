const createObservable = require('./observable');

const createIntervalObservable = function(interval) {
    return createObservable((observer) => {
        var i = 0;
        setInterval(() => observer.next(i++), interval);
    });
};

const observer = {
    next: (i) => console.log(i),
    error: () => console.log('error'),
    complete: () => console.log('complete'),
};

createIntervalObservable(100)
    .map((i) => i*i)
    .scan((acc, i) => acc + i, 0)
    .filter((i) => i <= 100)
    .debounce(1000)
    .startWith({foo: 42})
    .subscribe(observer)
;
