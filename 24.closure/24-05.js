
const x = 1;

function outer() {
    const x = 10;
    return () => { console.log(x); };
}

const inner = outer();
inner();