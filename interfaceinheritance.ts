interface Iperson{
    name:string;
    code:string;
    dep?:string;
}

let p1:Iperson={
    name:"tony",
    code:"3"
}

// we can not define access modifier in interface
// by default it is public

interface Iemployee{
    empCode:string;
    name:string;
    pincode:number;
// method below, we can provide arguments also
    getDetails():string;
}

// we can inheret multiple interface in one class
// but we cannot inheret multiple class

// method overloading is not there in ts

class Employee implements Iemployee{
    empCode: string;
    name:string;
    pincode:number;
    
    temp:number;
    constructor(a:string,b:string,c:number){
        this.empCode = a;
        this.name = b;
        this.pincode = c;
        this.temp = c;
    }
    getDetails(): string {
        return this.empCode;
    }

}

let v = new Employee("code","tony",10);
console.log(v);


