
// 생성자 함수
function Circle(radius) {
    this.radius = radius;
}

/*
    Circle 생성자 함수가 생성한 모든 인스턴스가 getArea메서드를 공유해서
    사용할 수 있도록 프로토타입에 추가한다.
 */
Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
}

//인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

/*
    Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체 역할을 하는
    프로토타입 Circle.prototype으로부터 getArea메서드를 상속받는다.
    즉, Circle생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea메서드를 공유한다.
 */
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea())
console.log(circle2.getArea())