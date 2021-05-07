const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios').default;


const validaJWT = async( req = request ,res = response ,next ) =>{

        const { apikey = '' } = req.query;

        if(apikey){
            try {

                const { uid } = jwt.verify(apikey,process.env.SECRETORPRIVATEKEY);
    
                //buscar usuario con axios
                const url = process.env.URL_REST;
                //console.log(url);

                try {
                    let resBuscar = await axios.get(`${url}/buscar/usuarios/${uid}`)

                    if(resBuscar.status == 200){
                    
                        console.log(resBuscar.data.results[0]);
                        req.usuario = resBuscar.data.results[0];
                    }else{
                        req.usuario = false;
                    }

                } catch (error) {
                    req.usuario = false;
                }

            } catch (err) {
                req.usuario = false;
            }
        }else{
            req.usuario = false;
        }
        next();
}


module.exports = {
    validaJWT
}
