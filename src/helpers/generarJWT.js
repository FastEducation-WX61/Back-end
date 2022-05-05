const jwt = require("jsonwebtoken");

const generateJsonWebToken = (id) => {
    return new Promise((resolve, reject)=>{
        const payload = {id};
        jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn: "1h"
        }, (err, token) =>{
            if(err){
                reject("Hay un error")
            }
            else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generateJsonWebToken
};