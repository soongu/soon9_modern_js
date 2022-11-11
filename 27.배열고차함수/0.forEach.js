
const numbers = [1,2,3];
const pows = [];

numbers.forEach(number => pows.push(number ** 2));
console.log(pows);
console.log("==============================================")
pows.forEach((item, idx, arr) => {
    console.log(`요소: ${item}, 인덱스: ${idx}, 원본배열: ${JSON.stringify(arr)}`)
});