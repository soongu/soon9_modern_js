
/*
 flag- 정규표현식의 검색 방식을 설정하기 위해 사용
 1. i: Ignore case - 대소문자를 구분하지 않고 패턴을 검색
 2. g: Global - 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
 3. m: Multi line - 문자열의 행이 바뀌더라도 패턴 검색을 계속함.
 */

const target = 'Is this all there is?';
let result = target.match(/is/);
console.log(result);

result = target.match(/is/i);
console.log(result);

result = target.match(/is/g);
console.log(result);

result = target.match(/is/ig);
console.log(result);
