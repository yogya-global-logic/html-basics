var bike = /** @class */ (function () {
    function bike(comp, age) {
        this.company = comp;
        this.age = age;
    }
    return bike;
}());
var myEnum;
(function (myEnum) {
    myEnum["c1"] = "bajaj";
    myEnum["c2"] = "tata";
    myEnum["c3"] = "ashok";
    myEnum["c4"] = "hero";
    myEnum[myEnum["age1"] = 1] = "age1";
    myEnum[myEnum["age2"] = 2] = "age2";
    myEnum[myEnum["age3"] = 3] = "age3";
    myEnum[myEnum["age4"] = 4] = "age4";
})(myEnum || (myEnum = {}));
// console.log(myEnum);
var MyBike = new bike(myEnum.c1, myEnum.age2);
// MyBike.company = myEnum.c1;
// MyBike.age = myEnum.age3;
console.log(MyBike);
