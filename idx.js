
const ary = [1,2,3,2];
let mySet = new Set(ary);
mySet.add(20);

mySet.forEach(element =>{
    console.log(element);
})

console.log(mySet);