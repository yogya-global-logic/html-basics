class bike{
    // company:String;
    company:myEnum;
    age:Number;

    constructor (comp:myEnum,age:Number){
        this.company = comp;
        this.age = age;
    }

}

enum myEnum{
    c1 = 'bajaj',
    c2 = 'tata',
    c3 = 'ashok',
    c4 = 'hero',
    age1 = 1,
    age2,
    age3,
    age4
}

// console.log(myEnum);

let MyBike:bike = new bike(myEnum.c1,myEnum.age2);
// MyBike.company = myEnum.c1;
// MyBike.age = myEnum.age3;

console.log(MyBike);


