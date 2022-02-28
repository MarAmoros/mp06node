const express = require('express'); // Importar express
const path = require('path')
const PORT = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Mar02:holaBuenas@testcluster.abqp2.mongodb.net/school?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  // pagina inicial
  .get('/', (req, res) => {
      res.sendFile(__dirname+"/cliente.html")
  })

//profesores
  .get('/profesores', (req, res) => {
  async function run() {
      try {
        await client.connect()
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
})

//alumnos
.get('/alumnos', (req, res) => {
    // Connection URI

    // Create a new MongoClient
        async function run() {
            try {
              await client.connect()
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

})
//listen
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

