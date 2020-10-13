
//1. exec: 인수로 전달받은 문자열에 대해 패턴을 검색하여 매칭결과를 배열로 반환
const target = 'Is this all there is?';
const regExp = /is/;

const result = regExp.exec(target);
console.log(result);

//2. test: 매칭결과를 불리언으로 반환
const isMatch = regExp.test(target);
console.log(isMatch);