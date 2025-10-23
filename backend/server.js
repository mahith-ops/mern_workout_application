require('dotenv').config();


const express = require('express');


//express app initialization
const app = express();
const workoutsRoutes = require('./routes/workouts');

app.use('/api/workouts', workoutsRoutes);

app.use((req, res, next) => {
    console.log (req.path , req.method);
   next();
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening for requests on port ${process.env.PORT}`);
});

