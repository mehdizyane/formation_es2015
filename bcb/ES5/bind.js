function sum(a, b) {return a + b;}

var sum2 = sum.bind(undefined,2);

function showThis() {console.log(this);

var globalShowThis= showThis.bind(window);
var localShowThis= showThis.bind(this);