
function getThisBinding() {
    return this;
}

//this로 사용할 객체
const thisArg = { a: 1 };

console.log('1:',getThisBinding());
console.log('2:',getThisBinding.apply(thisArg, [5,6,7]));
console.log('3:',getThisBinding.call(thisArg, 4,3,2));