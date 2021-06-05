const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 5000;

// app.get('/',(req,res)=>{

//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

app.use(express.static(path.join(__dirname,'public')));

//Set view engine
app.set('view engine','ejs');

app.use('/',indexRouter);

app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`));