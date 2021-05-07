const { response, request } = require("express");
const path = require('path');

const redireccionaHome= (req = request,res = response) =>{

    if(req.usuario){
        res.render('home',{
          usuario : req.usuario,
          titulo:'Administrador || MoraBoutiqueMX'
        });
    }else{
      res.sendFile(path.join(__dirname, '../public', '404.html'));
    }
}



module.exports= {
    redireccionaHome
}