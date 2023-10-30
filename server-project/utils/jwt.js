//Importar jwt
const jwt = require("jsonwebtoken");

const generateToken = (user) =>{
    console.log('generateToken =>',user);
    const expirationToken = new Date();
    expirationToken.setHours(expirationToken.getHours() + 1);
    //Generamos el payload del jwt
    const payload ={
        id: user.id,
        email: user.email,
        iat: Date.now(),
        exp: parseInt(expirationToken.getTime() / 1000),
    };
    console.log("payload => ",payload);

    const access = jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY);
    return access;
};

const refreshToken = (user) =>{
    console.log(user);
    const expirationToken = new Date();
    //Actualizamos cada mes el token
    expirationToken.setMonth(expirationToken.getMonth() + 1);
    const payload ={
        id: user.id,
        email: user.email,
        iat: Date.now(),
        exp: expirationToken.getTime(),
    };
    const refresh = jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY);
    return refresh;

}

const decodeAccessToken = (token)=>{
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    return verifyToken;
}

module.exports = {
    generateToken,
    refreshToken,
    decodeAccessToken,
}