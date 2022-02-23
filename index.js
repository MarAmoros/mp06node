const express = require('express'); // Importar express
const app = express(); // Asignar express a la variable app
const port = 8000; // Puerto para express
const { MongoClient } = require("mongodb");

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/cliente.html")
});


app.get('/profesores', (req, res) => {
   // Connection URI
   const uri =
   "mongodb://localhost:27017/?maxPoolSize=20&w=majority";
 // Create a new MongoClient
 const client = new MongoClient(uri);


     async function run() {
         try {
           await client.connect();
             const database = client.db("school");
             const profesores = database.collection("profesores");

             const cursor = await profesores.find()
             let profAr = await cursor.toArray() //guardas el find en una variable
             res.json(JSON.stringify(profAr)); // lo envias a /alumnos

         } finally {
           await client.close();
         }
       }
       run().catch(console.dir);
    //let profesores = ["Profe1", "Profe2"];
    //res.json(JSON.stringify(profesores));
});

app.get('/alumnos', (req, res) => {
    // Connection URI
    const uri =
      "mongodb://localhost:27017/?maxPoolSize=20&w=majority";
    // Create a new MongoClient
    const client = new MongoClient(uri);


        async function run() {
            try {
              await client.connect();
                const database = client.db("school");
                const alumnos = database.collection("alumnos");

                const findResult = await alumnos.find({
                    name: "Mar",
                  });
                  const cursor = await alumnos.find()
                let alumAr = await cursor.toArray() //guardas el find en una variable
                res.json(JSON.stringify(alumAr)); // lo envias a /alumnos

            } finally {
              await client.close();
            }
          }
          run().catch(console.dir);

});
// Crear un servidor web con express el el puerto asignado en la varible port.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});