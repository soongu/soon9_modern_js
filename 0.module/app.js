
/*
import { pi, square, Person } from './lib.mjs';

console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));

 */

import * as lib from './lib.mjs';
//디폴트모듈을 부를때는 임의의 이름을 지어준다
import powpow from './default.mjs';

console.log(lib.pi);
console.log(lib.square(50));

console.log(powpow(2,4));