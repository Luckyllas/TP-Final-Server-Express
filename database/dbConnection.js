const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conexion a la base de datos exitosa.')
    }catch{
        console.log('Error al conectarse a la base de datos: ' + error.menssage);
    }
}

module.exports = dbConnect;