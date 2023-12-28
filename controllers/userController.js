const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAllUsers = async (req, res)=>{ //.get nos especifica que espera el metodo GET (obtener)
    //res.status(200).json(taskDb);
    try{
        const allUsers = await User.find(); // trae todas las tareas de la coleccion
        res.status(200).json({users: allUsers, msg: 'Ok.'});
    }catch(e){
        res.status(500).json({users: [], msg:'Error en el servidor - ' + e.message});
    }
}

const createUser = async (req, res) =>{

    try{
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(10);

        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = {...req.body, password: hashedPassword};

        const user = await User.create(newUser); //creamos una nueva tarea en la base de datos

        res.status(201).json({user , msg: 'Usuario creado exitosamente.'});
    }catch(e){
        res.status(500).json({msg: 'Error al crear un nuevo usuario - ' +e.message});
    }
};

const loginUser = async (req, res) =>{
    try{
        const usuario = await User.findOne({username: req.body.username});
        
        if(!usuario){
            res.status(404).json({user: null, msg: 'Usuario y/o contraseña incorrectos.'});
        } else {
            const verification = bcrypt.compareSync(req.body.password, usuario.password);
            if(!verification){
                res.status(404).json({user: null, msg: 'Usuario y/o contraseña incorrectos.'})
            } else {
                const token = jwt.sign({userId: usuario._id, username: usuario.username}, process.env.JWT_KEY, {expiresIn: 1000*60*2})
                res.status(200).json({token: token, msg: 'Ok.'});
            }
        }
    }
    catch(error){
        console.log('Error al loguear el usuario - ', error);
        res.status(500).json({user: null, msg: 'Error en el login - ' + error.message});
        }
}

const deleteUser = async (req, res) =>{
    try{
       const deleteUser = await User.findByIdAndDelete(req.params.id);
       res.status(200).json({user: deleteUser, msg:'Usuario eliminado exitosamente.'});
   }catch(e){
       res.status(500).json({msg: ' Error al eliminar el usuario - ' +e.message});
   }
}



module.exports = {getAllUsers, createUser, loginUser, deleteUser};