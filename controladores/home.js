const { response, request } = require("express");
const path = require('path');

const redireccionaHome= (req = request,res = response) =>{

    if(req.usuario){
        res.render('home',{
          usuario : req.usuario,
          titulo:'Administrador || Home || MoraBoutiqueMX'
        });
    }else{
      //res.sendFile(path.join(__dirname, '../views', 'login.hbs'));
      //res.sendFile('/login');
      res.sendFile(path.join(__dirname, '../public', '404.html'));
    }
}



module.exports= {
    redireccionaHome
}