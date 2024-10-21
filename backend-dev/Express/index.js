let express = require('express')
let app = express()

// app.use((req, res)=>{
//     res.send('<h1>i am learning express</h1>');
//     console.log("i am middleware");
// })

// app.use('/middleware',(req, res)=>{
//     // console.log(req);
//     console.log(res);
//     res.send('<h1>i am learning express</h1>');
//     console.log("i am middleware");
// })

app.get('/cat',(req,res)=>{
    res.send("<h1>i am cat </h1>");
    console.log("helloooo");
})

app.get('/dog',(req,res)=>{
    console.log(req.query);
    console.log(req.query.namm)
    res.send("<h1>i am dog </h1>")
})

app.get('/lions',(req,res)=>{
    res.send("<h1>i am lion </h1>")
})

app.get('/r/:subredit', (req,res)=>{
    console.log(req.params);
    let {subredit} = req.params;
    res.send(`<h1>my name is ${subredit}`);
})


app.listen(8080,()=>{
    console.log("i am connected to server");
})