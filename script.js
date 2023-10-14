console.log("JavaScript - Day -3: JS Array & objects");

//Q1:How to compare 2 JSON having same property without order
//a.let object1={name:"person1",age:5}
//b..let object2={age:5,name:"person1"}

//Solution

let object1 = { name: "person1", age: 5 };
let object2 = { age: 5, name: "person1" };

// Convert JSON objects to strings
let jsonString1 = JSON.stringify(object1);
let jsonString2 = JSON.stringify(object2);

// Sort the strings to ensure property order doesn't matter
let sortedJSON1 = jsonString1.split('').sort().join('');
let sortedJSON2 = jsonString2.split('').sort().join('');

// Compare the sorted strings
if (sortedJSON1 === sortedJSON2) {
  console.log("The JSON objects are equivalent without considering property order.");
} else {
  console.log("The JSON objects are not equivalent without considering property order.");
}

