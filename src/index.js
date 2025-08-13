// require('dotenv').config();

import connectDB from './db';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});


connectDB













/* ( async () => {
    try{
        await mongoose.connect(`${procsess.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.error("ERROR", error);
        throw error;
    }
}) () */