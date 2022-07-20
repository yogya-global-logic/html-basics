
// interface-incomplete , class-complete
// no access modifier , has access modifier


class student{
    name:string;
    age:number;
    country:string;
    constructor (name:string,age:number){
        this.age = age;
        this.name = name;
    }
}

// dry principle(do not repeat yourself)

class tempStudent extends student{
    dayleft:number;
    constructor(daysleft:number,name:string,age:number){
        super(name,age);
        this.dayleft = daysleft; 
    }
}

let thor = new tempStudent(10,"thor",1000);
console.log(thor);


// super is used to call constructor of parent class 
// from the child class