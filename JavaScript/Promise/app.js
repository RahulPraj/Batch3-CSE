let promise = new Promise(function(resolve, reject){
    console.log("mujhe mera promise chahiyee");
    setTimeout(function(){
        // let data = "mai hun doremon";
        // resolve(data);
        let err ="mai nhi hun tera dost";
        reject(err);

    },4000)
});

promise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})