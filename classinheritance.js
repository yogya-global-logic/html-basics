var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(age, name) {
        this.age = age;
        this.name = name;
    }
    return student;
}());
// dry principle
var tempStudent = /** @class */ (function (_super) {
    __extends(tempStudent, _super);
    function tempStudent(daysleft, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.dayleft = daysleft;
        return _this;
    }
    return tempStudent;
}(student));
var thor = new tempStudent(10, "thor", 1000);
console.log(thor);
// super is used to call constructor of parent class 
// from the child class
