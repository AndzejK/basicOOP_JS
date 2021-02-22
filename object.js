let dog = {
    name:"Roy",
    numLegs:4,
    sayLegs: function(){
        return (`This dog has ${this.numLegs} legs`);
    }
}

console.log(dog.name);
console.log(dog.sayLegs());