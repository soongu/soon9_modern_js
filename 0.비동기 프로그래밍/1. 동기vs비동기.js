

const sleep = (func, delay) => {
    const delayUntil = Date.now() + delay;

    while (Date.now() < delayUntil);

    func();
};

const foo = () => {
    console.log('foo');
};

const bar = () => {
    console.log('bar');
};


//동기 프로그래밍
// sleep(foo, 3000);
// bar();

//비동기 프로그래밍
setTimeout(foo, 0);
bar();