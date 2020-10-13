
const numbers = [1,2,3,4,5];

const odds = numbers.filter(n => n % 2 === 0);
console.log(odds);

console.log("=======================");

class Users {
    constructor() {
        this.user = [
            { id: 1, name: 'kim' },
            { id: 2, name: 'lee' },
            { id: 3, name: 'park' },
        ];
    }

    findById(id) {
        return this.user.filter(user => user.id === id);
    }

    remove(id) {
        this.user = this.user.filter(user => user.id !== id);
    }
}

const users = new Users();
let user = users.findById(3);
console.log(user);

users.remove(2);
console.log(users);