let messag:string = "Hello";
console.log(messag);
console.warn(messag);

const name1:readonly string[] = ["hello","world"];
// name1.push("jarvis");
// remove readonly to push

console.log(name1);

let tuple:[number,string] = [6,"yuvi"];
tuple[0] = 3;
tuple.push(400);
let h = tuple[1];
console.log(tuple,h);

// object
const person:{
    name:String,
    age:Number,
    // constructor(parameters) {  
    // }
} = {
    name:"tom",
    age:20
}

console.log(person);




// interface is used to declare only, not initialise
// we use Iname 'I' in name as ease 
// it is not mandatory 
interface temp{
    name:String,
}

interface Idemension extends temp{
    width:number,
    height:number
}

interface ICircle extends Idemension{
    radius:number
}

const Rectangle:ICircle={
    width:50,
    height:100,
    radius:34,
    name:"Yogya"
}

console.log(Rectangle);
console.log(Rectangle.height);


enum hello{
    Jan = 1,
    Feb,
    mar = "hello"
}

console.log(hello);
console.log(hello[0]);
console.log(hello[1]);
console.log(hello[2]);

console.log(hello.Jan);



