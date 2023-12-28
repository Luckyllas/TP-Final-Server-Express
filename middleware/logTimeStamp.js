const logTimeStamp = (req, res, next) =>{
    const timeStamp = new Date().toLocaleDateString();
    console.log(`[${timeStamp}] Solicitud entrante: ${req.method} ${res.oroginalUrl}`);
    next();
}

module.exports = logTimeStamp;