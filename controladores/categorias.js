const { response, request } = require("express");
const path = require('path');

const redireccionaCatego= (req = request,res = response) =>{

    if(req.usuario){
        res.render('categorias',{
          usuario : req.usuario,
          titulo:'Administrador || Categorias ||MoraBoutiqueMX'
        });
    }else{
      res.sendFile(path.join(__dirname, '../public', '404.html'));
    }
}



module.exports= {
    redireccionaCatego
}