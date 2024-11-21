const obj1 = { a: 1, b: { c: 2 } };
const clone = Object.assign({}, obj1);
clone.b.c = 3;
// console.log(obj.b.c); 
// 3 (shallow copy, nested objects are referenced)

// Use Object.create() to set up inheritance.


const proto = { 
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  };
  
  const objProto = Object.create(proto, {
    user: { 
      value: "John",       // The value of the property
      writable: false,     // Property cannot be changed
      enumerable: true,    // Property will show up in loops
      configurable: false  // Property descriptor cannot be changed
    }
  });
  objProto.name ='AUF'
console.log(objProto.speak());

// console.log(obj.greet()); // "Hello"
// console.log(Object.getPrototypeOf(obj) === proto); // true

//Defining Properties with Descriptors
const obj = Object.create({}, {
    name: {
      value: "John",
      writable: false,
      enumerable: true,
    }
  });
  
  console.log(obj.name); // "John"
  obj.name = "Doe"; // Error in strict mode or ignored in non-strict mode
  console.log(obj.name); // "John"

  //: Prototype Unaffected by Object.assign()
  const prototype = { greet: () => "Hello from prototype" };
  const source = Object.create(prototype);
  source.name = "John";

  source
  const target = {};

// Using Object.assign()
// Object.assign(target, source);


// console.log(target.greet());


// console.log(Object.getPrototypeOf(target));


//seal vs freeze vs preventExtensions

const  objProt= { name: "Alice" };
const frozenObj = Object.create(prototype,{
    name : {
        value: 'AliceEdit',
        writable: false,
        configurable: true,
        enumerable: false
    }
})
// Object.defineProperty(frozenObj,'name', {
//     value: 'AliceEdit',
//     writable: false,
//     configurable: true,
//     enumerable: false
// })

frozenObj

Object.preventExtensions(frozenObj); 
// Object.seal(frozenObj);             
// Object.freeze(frozenObj);   
frozenObj.name = 43
console.log(frozenObj);

Object.defineProperty(frozenObj,'name', {
    value: 'AliceEdit',
    writable: false,
    configurable: true,
    enumerable: false
})
delete frozenObj.name

frozenObj

// Reasigning the prototype 

const newPrototype = { feature: () => "Hello new feature" };
Object.setPrototypeOf(frozenObj,newPrototype)

source.feature()