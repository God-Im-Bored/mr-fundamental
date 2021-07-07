/*
Classes are a template for creating objects. They encapsulate data with code to work on that data.

It is often useful to define a class of objects that share certain properties. Members, or instances, of the class have their own properties to hold or define their state, but they also have methods that define their behavior. These methods are defined by the class and shared by all instances.

Properties --- define state
Methods --- define behavior on state

Classes use prototype-based inheritance: if two objects inherit properties from the same object, then we say those objects are instances of the same class. 

The constructor method is a special method for creating and intializing an object created with a class. A constructor can use the super keyword to call the constructor of the super class



*/

class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width  
    }
    get area() {
        return this.calcArea()
    }

    calcArea() {
        return this.height * this.width
    }
    
}

const square = new Rectangle()
square.height = 6
square.width = 6


console.log(square)
console.log(square.area)


