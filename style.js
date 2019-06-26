var array = ['pen', 'mobile', 'loptop', 'computer', 'phone', 'book'];
var a =Number(prompt("plz insert the number between 0 to 5"));
var b = array.indexOf("pen");
var c = array.indexOf("mobile");
var d = array.indexOf("loptop");
var e = array.indexOf("computer");
var f = array.indexOf("phone");
var g = array.indexOf("book");

(b == a) ? array.shift() : (c == a) ? array.splice(1, 1) : (d == a) ? array.splice(2, 1) : (e == a) ? array.splice(3, 1) : (f == a) ? array.splice(4, 1) : (g == a) ? array.pop() : alert('a');


console.log(array);

