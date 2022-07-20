// class - entity of diff data types
var car = /** @class */ (function () {
    function car() {
    }
    return car;
}());
var car1 = new car();
// car1 = object
// new car(); = default constructor
// default constructor can 
// only be used when no constructor is initialised
// car1.name = "c1";
// car1.age = 10;
var car2 = new car();
car2.name = "c2";
car2.age = 5;
console.log(car1.age, car1.name, ".....", car2);
var user = /** @class */ (function () {
    // we can give same or diff name in constructor
    // like name is diff but age is same
    function user(fullname, age) {
        this.name = fullname;
        this.age = age;
        this.temp = true;
    }
    return user;
}());
// constructor is used to define member of class
var jarvis = new user("jarvis", 20);
jarvis.name = "hello";
// if we make age private then we can't do below operation
// jarvis.age = 50;
console.log(jarvis);
console.log("..........");
// methods
// they may or may not return data
// it can be declared with arguments or without argument
// access modifier  Method name{argument list}: method return type 
// {
// method body(our logic)
// return [value to be written]
// }
// argument list can vary,
// access modifier(default-public) and method body is optional
var Geometry = /** @class */ (function () {
    function Geometry() {
    }
    Geometry.prototype.AddNumber = function (a, b, c) {
        if (c === void 0) { c = 100; }
        // let result:number = a+b;
        // return result;
        return a + b + c;
    };
    Geometry.prototype.mul = function (a, b) {
        console.log(a * b);
        return;
    };
    Geometry.prototype.setPrivate = function (a) {
        this.num2 = a;
    };
    Geometry.prototype.getPrivate = function () {
        return this.num2;
    };
    return Geometry;
}());
var maths = new Geometry();
// jarvis.name = "hello";
var ans = maths.AddNumber(2, 5, 3);
maths.mul(4, 5);
// let b:number = maths.getB(40);
maths.num1 = 50;
maths.setPrivate(80);
var k = maths.getPrivate();
console.log(maths, ans, k);
