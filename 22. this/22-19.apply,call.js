
function getThisBinding() {
    console.log(arguments)
    return this;
}

//this로 사용할 객체
const thisArg = { a: 1 };

console.log('1:',getThisBinding()); // window

/**
 * Function.prototype.apply(thisArgs[, argsArray])
 *
 * 주어진 this 바인딩과 인수 리스트 배열을 사용하여 함수를 호출한다.
 * @param thisArgs - this로 사용할 객체
 * @param argsArray - 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
 * @returns 호출된 함수의 반환값
 */

console.log('2:',getThisBinding.apply(thisArg, [5,6,7]));

/**
 * Function.prototype.call(thisArgs[, args1[, arg2[, ...]]])
 *
 * 주어진 this 바인딩과 ,로 구분된 인수 리스트를 사용하여 함수를 호출한다.
 * @param thisArgs - this로 사용할 객체
 * @param arg1, arg2, ... - 함수에게 전달할 인수 리스트
 * @returns 호출된 함수의 반환값
 */

console.log('3:',getThisBinding.call(thisArg, 4,3,2));