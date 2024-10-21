// function a(b){
//     console.log("hii i am fun A");
//     b();
// }

// function b(){
//     console.log("hii i am fun B");
// }

// a(b);

// case 2
function a(){
    console.log("hii i am inside fun A");

    function b(){
        console.log("hii i am inside fun B");
    }
    return b;
    
}



let ans  = a();
console.log(ans);