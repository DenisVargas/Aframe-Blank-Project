const path = require('path');
// require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE || 'development';

app.use(express.static(path.resolve(__dirname, 'public')));

//Rutas
// app.get('/', (req,res)=>{
//     //Respuesta.
//     //res.sendFile();
//     res.send('Conexion establecida');
// });

app.listen(PORT, ()=>{
    if(MODE === 'development'){
        console.log(`App running in https://localhost:${PORT}`);
        return;
    }
    
    console.log(`App runing in port: ${PORT}`);
});