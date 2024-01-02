const Product = require('../models/Products');

const getAllProducts = async (req, res) => {
    try{
        const allProducts = await Product.find();
        res.status(200).json({products: allProducts, msg: 'Productos obtenidos exitosamente.'});
    }catch(e){
        res.status(500).json({tasks: [], msg:'Error en el servidor - ' + e.message});
    }
}

const getProductsById = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);

    if(product){
        res.status(200).json({product, msg:'Producto obtenido por ID exitosamente.'});
    }else{
        res.status(404).json({product: null, msg: 'Recurso no encontrado.'});
    }
}

const createProduct = async (req, res) =>{
    try{
        const product = await Product.create(req.body);

        res.status(201).json({product , msg: 'Producto agregado exitosamente.'});
    }catch(e){
        res.status(500).json({msg: 'Error al cargar el nuevo producto - ' +e.message});
    }
}

const updateProduct = async (req, res) =>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({product: product, msg:'Producto actualizado exitosamente.'});
    }catch(e){
        res.status(500).json({msg: 'Error en la actualizacion del producto - ' +e.message});
    }

}

const deleteProduct = async (req, res) =>{
     try{
        const deleteProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({product: deleteProduct, msg:'Producto eliminado exitosamente.'});
    }catch(e){
        res.status(500).json({msg: ' Error al eliminar el producto - ' +e.message});
    }
}

module.exports = {getAllProducts, getProductsById, createProduct, updateProduct, deleteProduct};