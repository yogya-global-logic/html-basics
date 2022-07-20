var user = /** @class */ (function () {
    function user(fullname, age) {
        this.name = fullname;
        this.age = age;
        this.temp = true;
    }
    return user;
}());
var jarvis = new user("jarvis", 20);
jarvis.name = "hello";
console.log(jarvis);
