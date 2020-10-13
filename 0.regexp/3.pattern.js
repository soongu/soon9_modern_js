
// 임의의 문자열 검색: .은 임의의 문자 한개를 의미함. 문자의 내용은 무엇이든 상관없음
let target = 'Hello My World!';
let regExp = /.../g;
let result = target.match(regExp);
console.log(result);

//반복 검색: {m,n}은 최소 m번 최대 n번 반복되는 문자열을 의미
target = 'A AA B BB Aa Bb AAA';
// regExp = /A{1,2}/g; //1번이상 2번이하
// regExp = /A{2}/ig; //딱 2번
// regExp = /A{2,}/g; //최소 2번 이상
regExp = /A+/g; //+: 최소 1번 이상 반복되는 문자열 {1,}과 같음
result = target.match(regExp);
console.log(result);

target = 'color colour';
regExp = /colou?r/g; //?: {0,1} 과 같음
result = target.match(regExp);
console.log(result);

//OR 검색
target = 'A AA B BB Aa Bb';
// regExp = /A|B/g;
// regExp = /A+|B+/g; // A 또는 B가 1번이상 반복되는지
// regExp = /[AB]+/g; //위와 동일

target = 'A AA B BB ZZ Aa Bb';
// regExp = /[A-Z]+/g; //대문자 알파벳이 1번이상 반복되는지
// regExp = /[A-Za-z]+/g; //알파벳이 1번이상 반복되는지

target = 'AA BB 12,345';
// regExp = /[0-9]+/g; //숫자가 1번이상 반복되는것
// regExp = /[0-9,]+/g; //숫자또는 ,가 한번이상 반복되는것
// regExp = /[\d,]+/g; //위와 동일
// regExp = /[\D]+/g; //문자를 의미(특수문자 포함)

target = 'Aa Bb 12,345 _$%&';
// regExp = /[\w]+/g; // 알파벳, 숫자 , 언더스코어바를 의미
regExp = /[\W]+/g; //위를 제외한 나머지

//NOT 검색: [..] 내의 ^은 not의 의미를 가짐
target = 'AA BB 12 Aa Bb';
regExp = /[^0-9]+/g; //숫자가 아닌 것을 의미
console.log(result)
result = target.match(regExp);

//시작위치로 검색 : [...] 밖의 ^는 문자열의 시작을 의미
target = 'https://soon9.co.kr';
regExp = /^https?/;
console.log(regExp.test(target));

//마지막 위치로 검색: $는 문자열의 마지막을 의미
regExp = /kr$/; //kr로 끝나는지
console.log(regExp.test(target));




