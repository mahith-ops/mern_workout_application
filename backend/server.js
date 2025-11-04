require('dotenv').config();


const express = require('express');


//express app initialization
const app = express();
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workouts');

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log (req.path , req.method);
   next();
});


app.use('/api/workouts', workoutsRoutes);

//conneect to db
mongoose.connect(process.env.MONG_URL)
.then(() => {

    app.listen(process.env.PORT, () => {
    console.log(`connected to db & listening for requests on port ${process.env.PORT}`);
});


})
.catch((error) => {
    console.log(error);
}); 
    //listen for requests only after db connection is successful    

