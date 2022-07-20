var p1 = {
    name: "tony",
    code: "3"
};
// we can inheret multiple interface in one class
// but we cannot inheret multiple class 
var Employee = /** @class */ (function () {
    function Employee(a, b, c) {
        this.empCode = a;
        this.name = b;
        this.pincode = c;
        this.temp = c;
    }
    return Employee;
}());
var v = new Employee("code", "tony", 10);
console.log(v);
