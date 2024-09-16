console.log("Hello typescript");
var num = 20;
var str = "Hello";
var isBool = true;
console.log("Num value", num);
console.log("Str value", str);
console.log("Boolean value", isBool);
function add(a, b) {
    return a + b;
}
var y = add(3, 9);
console.log("Add", y);
var add2 = function (a, b) {
    return a + b;
};
var myPrint = function (text) {
    console.log("Hello ", text);
};
var s = add2(200, 500);
myPrint("Apple");
// Typescript =>
