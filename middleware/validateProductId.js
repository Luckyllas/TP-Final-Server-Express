const Product = require('../models/Product');

const validateProductId = async (req, res, next) => {
  const productId  = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ msg: 'Producto no encontrado.' });
    }

    req.product = product;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Error al validar el ID del producto.' });
  }
};

module.exports = validateProductId;