// making our constructor
class user{
    public name:string;
    private age:number;
    temp:boolean;
    constructor (fullname:string,age:number){
        this.name = fullname;
        this.age = age;
        this.temp = true;
    }
}

let jarvis = new user("jarvis",20);

jarvis.name = "hello";

console.log(jarvis);

