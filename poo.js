//This is our main Animal class
class Animal { 
    //The constructor helps us to build the properties of the object
    constructor(kind, age, color){ //Abstraction of the properties of an animal
        this.kind = kind; 
        this.age = age; 
        this.color = color; 
        this.data  = `Hello, I'm a ${this.kind}, i'm ${this.age} years old and i'm ${this.color} color`;
    }
    //This is a method: methods are the actions that our objects can do in this case we can see the information
    seeInfo(){ 
        console.log(this.data);
    }
}
//Here we extend a Dog class from Animal, Dog has the same properties but also have a new one this is Inheritance
class Dog extends Animal{ 
    constructor(kind,age,color,type){ 
        super(kind,age,color);
        this.type = null; 
    }
    //static method
     bark(){ 
        console.log('Goof goof!')
    }
    //setter to modify a value
    set setType(newName){ 
        this.type = newName;
    }
    //getter to obtain a value
    get getType(){ 
        return this.type;
    }
}

//Instance of a new object with its own properties
let dog = new Dog('dog', 5 , 'brown', 'huksy');
let cat = new Animal('cat', 2, 'white');
//with this setter we can change the value of the type
dog.setType = 'chihuahua'; 
//with this getter now we get the new info of type of dog
console.log(dog.getType);
//Now the dog can bark
dog.bark();