let dog = {
    name:"Roy",
    numLegs:4,
    sayLegs: function(){
        return (`This dog has ${dog.numLegs} legs`);
    }
}

console.log(dog.name);
console.log(dog.sayLegs());