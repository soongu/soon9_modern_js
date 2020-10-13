console.log('1:', this); //window

function square(number) {
    console.log('2:',this);
    return number * number;
}
square(2);

const person = {
    name: 'Lee',
    getName() {
        console.log(this);
        return this.name;
    }
};

console.log(person.getName());