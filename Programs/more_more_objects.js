//Keep the P of Person in capital its the industry norm
function Person(name,age){
    this.name = name;
    this.age = age;
}



const person1 = new Person("Shiv",20);

person1.nationality = "American"; 

const person2 = new Person("Shivanshu",20);
Person.prototype.nationality = "Indian"; // Hoisting// Prototype
console.log(person1.nationality);
console.log(person2.nationality);