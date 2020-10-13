
//특정 단어로 시작하는지 검사: http:// 또는 https://로 시작하는지 검사
const url = 'https://example.com';
let regExp = /^https?:\/\//;
regExp = /^(http|https):\/\//; //위와 동일
console.log(regExp.test(url));

//특정 단어로 끝나는지 검사: 확장자가 이미지인지 확인
const fileName = 'cat.jpg';
regExp = /(jpg|png|gif|svg)$/i;
console.log(regExp.test(fileName));

//아이디로 사용가능한지: 알파벳 소문자로 시작하며 4~10자리인지 검사
const id = 'abcf12adf';
regExp = /^[a-z][a-z0-9]{3,9}$/;
console.log(regExp.test(id));

//이메일로 사용가능한지
const email = 'nako123@gmail.com';
regExp = /^[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_\.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
console.log(regExp.test(email));

//핸드폰 번호 형식에 맞는지
const phone = '010-1234-1234';
regExp = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(regExp.test(phone));

//비밀번호에 특수문자가 있는지
const pw = 'ddddd123!';
regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

console.log(regExp.test(pw));