let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
// console.log(myObject);

// for(const prop in myObject){
//     console.log(prop);
//     console.log(myObject[prop]);
// }

const keys = Object.keys(myObject);
console.log(keys);

for(const key of keys){
    console.log("key:", key, "|", "value:", myObject[key]);
}
