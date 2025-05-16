const app = require('./app');

app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server is listening on ${process.env.PORT}`);
});