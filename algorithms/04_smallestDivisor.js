const smallestDivisor = (num) => {
if (num === 1) {
return 1;
}
const iter = (c, a)=> {
if (c % a === 0){
return a;
}
return iter(c, a + 1);
}
return iter(num, 2);
}
console.log(smallestDivisor(121));// 11
