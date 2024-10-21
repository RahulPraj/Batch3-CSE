// function fun(){
//     console.log("i am normal fucntion")
// }

// fun();

// constructor function
// function newFun(){
//     this.naam = "rahul";
//     this.email = "rahul@123gmail.com";
// }
// let ans = new newFun();
// console.log(ans);

// ------------
function newFun(name, mail){
    this.naam = name;
    this.email = mail;
}
let ans = new newFun("rahul","rahul@123gmail.com");
let ans1 = new newFun("riya","riya@123gmail.com");
console.log(ans);
console.log(ans1);