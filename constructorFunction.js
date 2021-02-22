/*
    Constructors are functions that create new objects. 
    They define properties and behaviors that will 
    belong to the new object. Think of them as a blueprint for the creation of new objects.
*/

function Dog(){
    this.name="Roy",
    this.colour="black",
    this.numLegs=4
}

/*
    1# Constructors are defined with a capitalized name to distinguish them from other functions that
        are not constructors.
    2# Constructors use the keyword this to set properties of the object they will create. Inside the
        constructor, this refers to the new object it will create.
    3# Constructors define properties and behaviors instead of returning a value as other functions
        might.
*/

let hound=new Dog();

// We can design a constructor to accept parametrs to make easier change the values of an object.

function Dogparam(name,colour){
    this.name_=name;
    this.colour_=colour;
    this.numLegs=4;
}

let terrier=new Dogparam("Copacetic","white");
console.log(terrier);