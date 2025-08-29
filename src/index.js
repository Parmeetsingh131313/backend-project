// require('dotenv').config();

import {app} from './app.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});


connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGODB CONNECTION ERROR !!!", error)
})











/* ( async () => {
    try{
        await mongoose.connect(`${procsess.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.error("ERROR", error);
        throw error;
    }
}) () */