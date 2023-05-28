const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.static(process.cwd()+"/public"));
const registrosViajes = [
  { id: 1, campoId: 1,nombre: 'Julieta Venegas', Lugar:'Paris', fecha: '2023-05-26', duracion: '2 dias', precio: 10000 },
  { id: 2, campoId: 2,nombre: 'Carlos Rivera', Lugar:'Honduras', fecha: '2023-05-25', duracion: '7 dias', precio: 15000 },
  { id: 3, campoId: 3,nombre: 'Julion Alvarez', Lugar:'Chile', fecha: '2023-06-27', duracion: '3 dias ', precio: 20000 },
  { id: 1, campoId: 1,nombre: 'Pablo Alboran', Lugar:'Los Angeles', fecha: '2023-08-06', duracion: '4 dias', precio: 13000 },
  { id: 2, campoId: 2,nombre: 'Dualipa', Lugar:'Guatemala', fecha: '2023-05-13', duracion: '17 dias', precio: 45000 },
  { id: 3, campoId: 3,nombre: 'Selena Gomez', Lugar:'España', fecha: '2023-06-23', duracion: '23 dias ', precio: 30000 }
];


// Ruta para obtener todos los registros de viajes
app.get('/', (req, res) => {
  res.sendFile(process.cwd()+"/public/index.html");
});
app.get('/registros',(req,res)=>{
    res.json(registrosViajes);
});
// Iniciar el servidor en el puerto 3000
app.listen(process.env.PORT||3000, () => {
  console.log('Servidor iniciado en el puerto', process.env.PORT|| 3000);
});
