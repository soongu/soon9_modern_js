

/*function Person(name, age) {
    this.name = name; // public
    let _age = age; // private

    // 인스턴스 메서드
    this.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };
}*/

// 위 코드의 sayHi 메서드는 인스턴스 메서드이므로 객체 생성시에 중복으로 생성된다.
// 이 메서드를 프로토타입 메서드로 변경하여 중복생성을 방지해보자

/*function Person(name, age) {
    this.name = name; // public
    let _age = age; // private
}*/

// 프로토타입 메서드
/*Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
};*/

// 프로토타입으로 변경하는 순간 _age 참조가 불가능해진다. 클로저를 이용해보자

const Person = (function () {

    let _age = 0; // private

    // 생성자 함수
    function Person(name, age) {
        this.name = name; // public
        _age = age; // private
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Lee', 20);
me.sayHi();
console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person('Park', 30);
you.sayHi();
console.log(you.name); // Park
console.log(you._age); // undefined
