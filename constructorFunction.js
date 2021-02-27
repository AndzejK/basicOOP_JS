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
/*
Dog.prototype={
    friendly:"yes",
    intro:function(){
        console.log(`My name is ${this.name}`);
    }
}
*/

/*
    ##! When setting the PROTOTYPE to a new object, what I did above, It erases 
    the CONSTRUCTOR property!!!
*/

Dog.prototype={
    constructor: Dog, // Defining the constructor property
    friendly:"yes",
    intro:function(){
        console.log(`My name is ${this.name}`);
    }
}

/*
    ## A function's prototype ## : A function's prototype is the object instance that will become the prototype for all objects created using this function as a constructor
    ## An object's prototype ## : An object prototype is the object instance from which the object is inherited.
*/
console.log(Object.prototype.isPrototypeOf(Dog.prototype))

/*
    ##### the Prototype Chain
source: www.freecodecamp.org
    All objects in JavaScript (with a few exceptions) have a prototype. Also, 
an object’s prototype itself is an object.
    Because a prototype is an object, a prototype can have its own prototype! 
In this case, the prototype of Bird.prototype is Object.prototype.
    Therefore, if I recall the hasOwnProperty method, which is defined in Object.prototype, 
which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example 
of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype.
Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. 
Therefore, any object can use the hasOwnProperty method.
*/

// ###### Using inheretance so you Don't Repeat Yourself (DRY)
/*
    Task #2:
The eat method is repeated in both Cat and Bear. 
Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
*/

function Cat(name){
    this.name=name;
}

Cat.prototype={
    constructor:Cat,
    /*
    eat:function(){
        console.log("nom nom nom");    
    }
    */
}

function Bear(name){
    this.name=name;
}

Bear.prototype={
    constructor:Bear,
    /*
    eat:function(){
        console.log("nom nom nom");
    }
    */
}
function Animal(){}
Animal.prototype={
    constructor:Animal,
    eat:function(){
        console.log("nom nom nom");
    }    
}

//Another syntex for creting a new object;
//let rotweiler = Object.create(Animal.prototype);
Dog.prototype=Object.create(Animal.prototype);
//console.log(rotweiler);
let rotweiler=new Dog("Roy");

//console.log(rotweiler.intro());
rotweiler.eat();

// ###### Reset an Inherited Constructor Property
function Bird(){}
Bird.prototype=Object.create(Animal.prototype);
let duck = new Bird();
console.log(duck.constructor);
//here we're resetin/setting up the original constructor Bird;
Bird.prototype.constructor=Bird;
console.log(duck.constructor);
duck.eat();

// Adding a method after inheritance
Bird.prototype.fly=function(){
    console.log('I can fly.');
}
duck.fly();

/*
    #### Reminder: How to inherit methods from another object by referencing its PROTOTYPE object
ChildObject.prototype = Object.create(ParentObject.prototype);
    #### Therefore, the ChildObject received its own methods by chaining them onto its prototype: 
ChildObject.prototype.methodName = function() {...};
*/

// ####### Override Inherited Methods
/*
It's possible to override an inherited method. It's done the same way - 
by adding a method to ChildObject.prototype using the same method name as the one to override. 
*/
Bird.prototype.eat=function(){
    return console.log("peck peck peck");
}

let goose = new Bird();
goose.eat();

// ######## mixins
/*
    For unrelated objects, it's better to use mixins. 
A mixin allows other objects to use a collection of functions.
*/

let flyMixin=function(obj){
    obj.fly=function(){
        console.log("Flying, wooosh!");
    }
}

let bird = {
    name:"Donald",
    numLegs:2
}

let plane = {
    name:"Vic-77",
    numPassengers: 543
}
 flyMixin(bird);
 flyMixin(plane);

 console.log(bird);
 console.log(plane);