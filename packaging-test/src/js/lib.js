
const pi = Math.PI; //ES6 모듈

const power = (x, y) => x ** y; //ES7 지수연산자 화살표함수

//ES 6 클래스
class Foo {

    foo() {
        // stage4 : 객체 Rest/Spread
        const { a, b, ...x } = { ...{ a:1, b:2 }, c:3, d:4};
        return { a, b, x };
    }

}