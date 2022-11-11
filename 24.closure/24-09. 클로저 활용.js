/*// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3*/

// 위 코드의 문제점은 num이 전역변수이므로 increase함수 이외에도 num의 값을 변경시킬 가능성이 존재한다.

//=======================================================================//

/*
// 카운트 상태 변경 함수
const increase = function () {
    // 카운트 상태 변수
    let num = 0;
    return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 1
console.log(increase()); // 1*/

// 위 코드는 num이 지역변수이므로 함수 호출시마다 0으로 재초기화되는 문제가 있다.

//=======================================================================//

const increase = (function () {
    let num = 0;

    // 클로저
    return function () {
        return ++num;
    };
}());

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3











