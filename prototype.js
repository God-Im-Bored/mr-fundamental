/*
All objects created by object literals have the same prototype object --- Object.prototype

That is to say, javaScript objects have a set of "own properties," and they also inherit a set of properties from their prototype object.

If a property is not found in an object then its prototype property is checked to see if it does have that property.

If the prototype object does not have the property then its prototype is checked.

The prototype for an ojbect is set by the prototype property of the constructor function that was used to create and intialize  the object.

Almost all objects have a prototype, but only a small number of objects have a protytpe property. These objects with prototype properties define the prototypes for all other objects.

*/

let arr = ["Ace", "Boon"];
/*
--- Prototye Chaining ---
arr.__proto__ === Array.prototype
arr.__proto__.__proto__ === Object.prototype
arr.__proto__.__proto__.__proto__ === null
*/

let object = {
  name: "Joe Johnson",
  city: "Little Rock",
  getIntro: function () {
    console.log(this.name + " is the greatest 2 guard from " + this.city);
  },
};
/*
--- Prototye Chaining ---
object.__proto__ === Object.prototype
object.__proto__.__proto__ === null
*/

let object2 = {
    name: 'Kawhi Leonard', 
}

object2.__proto__ = object



console.log(object.name);
console.log(object.city);
object.getIntro();
// object where JS engine attaches hidden methods/properties
console.log(object2.__proto__); // same as Object.prototype
console.log(object2.city)
object2.getIntro()
