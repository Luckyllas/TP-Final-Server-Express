const axios = require('axios');

const getCotiz = async (_, res) => {
    try{
        const getUsd = (
            await axios('https://api.bluelytics.com.ar/v2/evolution.json')
        ).data.map((datos) => ({
            Fecha: datos.date,
            Tipo_de_Cambio: datos.source,
            Valor_de_Compra: datos.value_sell,
            Valor_de_Venta: datos.value_buy
        }))

        res.status(200).json({msg:'Valor del dolar obtenido exitosamente.', getUsd})
    }catch(e){
        res.status(500).json({msg:'Error al obtener el valor del dolar. ' + e.message})
    }
}
module.exports = {getCotiz};