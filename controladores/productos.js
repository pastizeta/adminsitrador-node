const { response, request } = require("express");
const path = require('path');

const redireccionaProd= (req = request,res = response) =>{

    if(req.usuario){
        res.render('productos',{
          usuario : req.usuario,
          titulo:'Administrador || Productos || MoraBoutiqueMX'
        });
    }else{
      res.sendFile(path.join(__dirname, '../public', '404.html'));
    }
}



module.exports= {
    redireccionaProd
}