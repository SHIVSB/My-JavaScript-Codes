let person = {
    name : "Shivanshu",
    address : {
        country : "India",
        state : "Uttarakhand",
        city : "Roorkee"
    },
    hobbies : ["Reading","Writing","Coding","Music"]
};

let { name : foo, 
    address : {
        country : xyz,
        state : abc,
        city : pqr
    }

    } = person;


console.log(xyz);