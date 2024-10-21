let arr = [1,2,3,"a", "b"];
// console.log(arr);

// arr.push("c");
let ans  = arr.push("c",true, 4);
console.log(arr);
console.log(ans);

// pop()

// arr.pop();
let ans1 = arr.pop();
console.log(arr);
console.log(ans1);


// -----------------------
let arr2 = [1,2,3,"a",true];

console.log(arr2);
arr2.unshift(0);
console.log(arr2);

arr2.shift();
console.log(arr2);

