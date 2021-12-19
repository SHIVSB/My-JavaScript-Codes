/**
 * More ways of creating objects
 */

//Creating objects with the help of functions

function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender
    //this keyword represents object that will get created
}

const person1 = new Person("Shiv",20,"Male");
person1.nationality = "Indian";
const person2 = new Person("Shivanshu",20,"Male")
console.log(person1);
console.log(person2);