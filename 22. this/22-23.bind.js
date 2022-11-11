
/*const person = {
    name: 'Lee',
    foo(callback) {
        setTimeout(callback, 100);
    }
};

person.foo(function () {
    console.log(`Hi! my name is ${this.name}`); // this를 못찾음
});*/


const person = {
    name: 'Lee',
    foo(callback) {
        setTimeout(callback.bind(this), 100);// bind메서드로 this를 전달
    }
};

person.foo(function () {
    console.log(`Hi! my name is ${this.name}`);
});