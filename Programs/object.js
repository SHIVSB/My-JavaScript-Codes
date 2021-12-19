const person = new Object();

person.name = "Shiv";
person.age = 99;
person.gender="Male";
person.dance = function(){
    console.log("Yeah Sure!");
}

console.log(person);

/**
 * How to access the fields and methods of the object
 */

person.dance();

/**
 * obj.fieldname -> acccess both the field and functions
 * 
 */


//print all the methods and functions
for(i in person){
    console.log(i);
}

//Create object inside the function

function makeObject(name,age,gender){
    return {
        name,age,gender
    }
}

console.log(makeObject("a","b","c"));


