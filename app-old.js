

const http = require('http');


http.createServer( (req,res) =>{

    //res.writeHead(200,{ 'Content-Type' : 'application/json' });

    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // res.writeHead(200,{ 'Content-Type' : 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Alejandro',
    //     edad: 32
    // }

    // res.write(JSON.stringify(persona));
    
    // res.write('1, alejandro\n');
    // res.write('2, diana\n');
    // res.write('3, leito\n');
    res.write('Hola Mundo');

    res.end();

} )
.listen( 8080 );



console.log('Escuchando en el puerto', 8080);