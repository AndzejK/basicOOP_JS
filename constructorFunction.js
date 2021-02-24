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

// ## Verify an Object's Constructor with instanceof

function House(numBedrooms) {
    this.numberOfBedrooms=numBedrooms
}

let myHouse = new House(4);
let newHouse= new House(5);
console.log(myHouse instanceof House);

// ### Understand Own Properties
/*
    numberOfBedrooms is called own property, it can be as much as you want,
    since it's defined directly on the instance object.
    Secondly, myHouse and New House each has its own separate COPY of this
    property. In fact every instance of House WILL have its own copy
    of this property.
*/

let ownProps_=[];
// Here we're looping through Object,syntex.
for(let property_can_be_anythingHere in myHouse){
    if (myHouse.hasOwnProperty(property_can_be_anythingHere)){
        ownProps_.push(property_can_be_anythingHere)
    }
}
console.log(ownProps_);

// ####  prototype Property
/*
    The prototype property allows you to add properties and methods to an object.
    => Syntax
    object.prototype.name = value
*/
House.prototype.numBaths=2;
console.log(newHouse.numBaths);

/*
It is important to emphasise the kind of properties:
    * OWN properties - are defined directly on the object instance itself.
    * PROTOTYPE properties - are defined on the prototype.
*/

/*
    TASK 1# 
    Add all of the own properties of beagle to the array 
    ownProps. Add all of the prototype properties of Dog to 
    the array prototypeProps.
*/

// TASK 1# Solution
let ownProps = [];
let prototypeProps = [];

// the Constructor for Dog objects
function Dog(name){
    this.name=name;
}
//creating an object using the Dog Constructor 
let beagle=new Dog("Poppy");
Dog.prototype.numLegs=4; //adding property for Constructor, therefore it's PROTOTYPE property;

for(let prop in beagle){
    if(beagle.hasOwnProperty(prop)){
        ownProps.push(prop);
    } else{
        prototypeProps.push(prop);
    }
}
console.log(`I'm coming from "beagle" object: ${ownProps}. Therefore it's my own property`);
console.log(`I'm coming from "Dog" constructor: ${prototypeProps}. Therefore it's PROTOTYPE property`);

// we can add more properties straightaway by setting the protype to a new object
Dog.prototype={
    friendly:"yes",
    intro:function(){
        console.log(`My name is ${this.name}`);
    }
}
