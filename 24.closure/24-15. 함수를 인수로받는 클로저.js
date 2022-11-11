

const counter = (function () {

    let count = 0;

    return function (predicate) {
        return count = predicate(count);
    };
}());

// 보조 함수
function increase(n) {
    return ++n;
}
function decrease(n) {
    return --n;
}

console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0
