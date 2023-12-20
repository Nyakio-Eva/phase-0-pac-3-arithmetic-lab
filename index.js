function add(a,b){
  return a + b;
}
//console.log()

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function increment(n){
    return ++n;
}
console.log(increment(291));

function decrement(n){
    return --n;
}
console.log(decrement(322));

function makeInt(n){
    return parseInt(n,10);
}
console.log(makeInt('0.2328'));
console.log(makeInt("sjknrjf"));

function preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal("2.222"));

