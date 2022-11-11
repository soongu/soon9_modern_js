
const points = [40, 100, 1, 5, 2, 25, 10];

// points.sort();
//숫자 배열의 오름차순 정렬, 비교함수의 반환값이 0보다 작으면 x를 우선하여 정렬
points.sort((x, y) => x - y);

console.log(points);

//내림차순 정렬
points.sort((x, y) => y - x);

console.log(points);

console.log("=======================")

//객체를 요소로 갖는 배열을 정렬
const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'html' },
    { id: 2, content: 'css' },
];

//비교함수, 매개변수 key는 프로퍼티 키다.
function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos)