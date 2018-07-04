function* Add(x) {
    console.log('1',x);
    yield x+1;
    console.log('2',x);
    var y = yield(null);
    console.log('3',x);
    yield x;
    console.log('4',x);
    y = 6
    return x+y;
}

console.log('hi');
var gen = Add(5);
console.log('hi2');
gen.next();
console.log('hi3');
gen.next();
console.log('hi4');
gen.next();
console.log('hi5');
gen.next();


//console.log(Add(5));