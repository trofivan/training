const sum = (n, acc = 0) => n ? (nextN) => sum(nextN, acc + n) : acc;

console.log(sum(1)() === 1);
console.log(sum(1)(2)() === 3);
console.log(sum(1)(2)(5)() === 8);
console.log(sum(1)(2)(5)(4)(12)(34)(93)(12)() === 163);
