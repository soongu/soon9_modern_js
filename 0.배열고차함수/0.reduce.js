
//총합 구하기
const numbers = [1,2,3,4,5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('sum:', sum);

//평균 구하기
const avg = numbers.reduce((acc, cur, i, { length }) => {
   //마지막 순회가 아니면 누적값을 반환하고, 마지막 순회면 평균을 구해 반환
   return i === length - 1 ? (acc + cur) / length : acc + cur;
});
console.log('avg:', avg);

//요소의 중복횟수 구하기
const fruits = ['banana', 'apple', 'orange', "orange", 'apple'];
const count = fruits.reduce((acc, cur) => {
    acc[cur] = (!acc[cur]) ? 1 : acc[cur] + 1;
    return acc;
}, {});
console.log('count:', count);

//중복 요소 제거
const values = [1,2,1,3,5,4,5,3,4,4];
const result = values.reduce((acc, cur, i, arr) => {
    if (arr.indexOf(cur) === i) acc.push(cur);
    return acc;
}, []);
console.log('result:', result);

const result2 = values.filter((value, i, arr) => arr.indexOf(value) === i);
console.log('result2:', result2);