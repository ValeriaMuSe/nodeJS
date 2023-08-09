const express = require('express');
const app = express();
app.use(express.json());

let tasks = []; // Este arreglo almacenará las tareas

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});

app.get('/task', (req, res) => {
  res.json(tasks); // Devuelve la lista de tareas
});

app.post('/task', (req, res) => {
  let task = {
    id: tasks.length + 1, // El id será el número actual de tareas + 1
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  };
  tasks.push(task); // Agrega la nueva tarea a la lista
  res.send('agrega una nueva tarea a la lista');
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});