// class - entity of diff data types
class car{
    name:String;
    age:Number;
}



let car1:car = new car();
// car1 = object

// new car(); = default constructor
// default constructor can 
// only be used when no constructor is initialised

// car1.name = "c1";
// car1.age = 10;

const car2 = new car();
car2.name = "c2";
car2.age = 5;


console.log(car1.age,car1.name,".....",car2);



class user{
    
    // by default it is public
    //  and we can access them outside also
    // public = access modifier

    // private variable can not be used outside class
    public name:string;
    private age:number;
    temp:boolean;
    // we can give same or diff name in constructor
    // like name is diff but age is same
    constructor (fullname:string,age:number){
        this.name = fullname;
        this.age = age;
        this.temp = true;
    }
}

// constructor is used to define member of class

let jarvis = new user("jarvis",20);

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

class Geometry{
    
    // c is optional parameter with default value of 100
    // it should be present at the end
    // we can also use c?:number for optional
    public num1:number;
    private num2:number;
    public AddNumber(a:number,b:number,c:number=100):number{
        // let result:number = a+b;
        // return result;
        return a+b+c;
    }
    public mul(a:number,b:number):void{
        console.log(a*b);
        return ;
    }
    public setPrivate(a:number):void{
        this.num2 = a;
    }
    public getPrivate():number{
        return this.num2
    }
    // public getB(b:number):{
    //     // this.b = b;
    //     // return this.b;
    // };
}


let maths = new Geometry();

// jarvis.name = "hello";
let ans:number = maths.AddNumber(2,5,3);
maths.mul(4,5);
// let b:number = maths.getB(40);
maths.num1 = 50;

maths.setPrivate(80);

let k = maths.getPrivate();
console.log(maths,ans,k);
