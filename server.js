
const express =require('express');
var app =express();
const fs=require('fs')
var hbs= require('hbs')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))
app.get('/',(req,res)=>{
    res.send({
        name:'Andrew',
        likes:[
            'cricket',
            'flower'
        ]

        
    })
});
app.use((req,res,next)=>{
    const now=new Date().toString();
    var log= `${now} : ${req.method} ${req.url}`
    console.log('time:',log);
   fs.appendFile('server.log', log + '\n',(error)=>{
    if(error){
        console.log('unable to start the server');
    }
   })
    next();
})

app.get('/about',(req,res)=>{
    res.render('public.hbs',{
        name:'krishna'
    })
})
app.get('/about',(req,res)=>{
    res.render('new.hbs',{
       newtext:'hii' 
    })
})
app.get('/error',(req,res)=>{
    res.send({
        errormassage:'this is error'
    })
})

app.listen(4000,()=>{

})