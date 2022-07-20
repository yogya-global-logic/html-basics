var messag = "Hello";
console.log(messag);
console.warn(messag);
var name1 = ["hello", "world"];
// name1.push("jarvis");
// remove readonly to push
console.log(name1);
var tuple = [6, "yuvi"];
tuple[0] = 3;
tuple.push(400);
var h = tuple[1];
console.log(tuple, h);
var person = {
    name: "tom",
    age: 20
};
console.log(person);
var car = /** @class */ (function () {
    function car() {
    }
    return car;
}());
var car1 = new car();
car1.name = "c1";
car1.age = 10;
var car2 = new car();
car2.name = "c2";
car2.age = 5;
console.log(car1.name, ".....", car2);
var Rectangle = {
    width: 50,
    height: 100,
    radius: 34,
    name: "Yogya"
};
console.log(Rectangle);
console.log(Rectangle.height);
var hello;
(function (hello) {
    hello[hello["Jan"] = 1] = "Jan";
    hello[hello["Feb"] = 2] = "Feb";
    hello["mar"] = "hello";
})(hello || (hello = {}));
console.log(hello);
console.log(hello[0]);
console.log(hello[1]);
console.log(hello[2]);
console.log(hello.Jan);
