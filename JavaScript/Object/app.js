let obj = {
    naam : 'rahul',
    age : 26,
    favColor : 'white'
}

// console.log(obj);
// console.log(obj.age);
// console.log(obj[0]);
// console.log(obj['naam']);

//update
obj.favColor = 'black';
console.log(obj.favColor);

//new property
obj.gender = 'Male';
console.log(obj);

//delete
delete obj.gender;
console.log(obj);
