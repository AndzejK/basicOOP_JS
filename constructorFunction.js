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

let ownProps=[];
// Here we're looping through Object,syntex.
for(let property_can_be_anythingHere in myHouse){
    if (myHouse.hasOwnProperty(property_can_be_anythingHere)){
        ownProps.push(property_can_be_anythingHere)
    }
}
console.log(ownProps);

// ####  prototype Property
/*
    The prototype property allows you to add properties and methods to an object.
    => Syntax
    object.prototype.name = value
*/
House.prototype.numBaths=2;
console.log(newHouse.numBaths);