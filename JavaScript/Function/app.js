function myFun(){
    let a = 5;
    let b = 10;
    let sum = a+b;
    console.log(sum);
    // return sum;
    console.log("i got my func ka sum")
}

// myFun();
console.log(myFun());
// let ans = myFun();
// console.log(ans);


// parameterized function

// function sum(num1,num2){
//     return num1 + num2;
// }

// let ans = sum(4,6);
// console.log(ans);

//first-class function

// let fun = function lol(){
//     console.log("hii i am learning js");
// }

let fun = function (){
    console.log("hii i am learning js");
}

fun();