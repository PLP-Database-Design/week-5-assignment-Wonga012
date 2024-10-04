// 1st we initialise dependences

const express = require('express');
//the above code is initialising the Business logic (Web server-backend)
const app = express();
const mysql = require ('mysql2');
const dotenv = require ('dotenv'); //this acts like a ring during the wedding
const cors = require('cors'); //****/
app.use(express.json());
app.use(cors());
dotenv.config();  //we configure

//create a file named = .env
// then we connect 
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME

    })

// Check if db connection works  
db.connect((err) => {     
    // No wedding today     
     if(err) {return console.log("Error connecting to the mysql db", err)}    

      // Yes wedding connected      
      console.log("Connected to mysql successfully as id: ", db.threadId)   
      
    });


        // get patient or retrieve
        // '/get-patient' is a route

// app.get('/getpatients', (req, res) =>{
// //     const getPatients = "SELECT * FROM patients"

//     //database method
//     // the method(query, values, callback function{
//     // logic
//     //})
//     db.query(getPatients, (err, result) =>{
//         //we might have error
//         if(err){
//             return res.statusMessage(500).send("Failed to fetch the patients")
//         }

//         // we might have an error
//         res.status(200).send(result)
// //     })
// })
        // retreive all providers
app.get('/get-providers', (req, res) => {
    const getProviders = "SELECT * FROM providers"
    db.query(getProviders, (err, result) => {
      // we might have an error
      if(err){
        return res.statusMessage(500).send("Failed to fetch the providers")
        }

        // we might have an error
        res.status(200).send(result)
    
    })

})
// declare the port and listen to the
const PORT = 3300;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})