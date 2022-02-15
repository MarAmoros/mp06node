const express = require('express'); // Importar express
const app = express(); // Asignar express a la variable app
const port = 8000; // Puerto para express

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/cliente.html")
});


app.get('/profesores', (req, res) => {
    let profesores = ["Profe1", "Profe2"];
    res.json(JSON.stringify(profesores));
});
app.get('/alumnos', (req, res) => {
    let students = ["Student1", "Student2"];
    res.json(JSON.stringify(students));

});
// Crear un servidor web con express el el puerto asignado en la varible port.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});