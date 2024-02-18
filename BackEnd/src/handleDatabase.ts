import express  from "express"; // nodejs framework
// import cors from "cors";//middleware for security / to received request only to set sites/origin. 
// import mysql2 from "mysql2"; //liblary for npm and database purpose
import helmet from 'helmet'//middleware for security from attacks
import bycrypt from "bcrypt"

import cookieParser from "cookie-parser"; //cookie purposes

const app = express();
const port: number = 8080;

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

// interface corsvalues {
//     origin: string[],
//     methods:string[],
//     credentials: boolean,
//     optionsSuccessStatus: number,
// }

// app.use(cors (<corsvalues>{
//     origin: ["http://localhost:5173", 'https://mcbaquev2.vercel.app/'],
//     methods: ["POST", "GET"],
//     credentials: true,
//     optionsSuccessStatus: 204,
// }))


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

// Error handling for server setup
app.on('error', (err) => {
    console.error('Server error:', err);
});
  
  // Handle unhandled promise rejections (e.g., database connection errors)
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
});

process.on('SIGINT', () => {
  client.close();
  process.exit();
});


import { Db, MongoClient, ServerApiVersion } from 'mongodb';
const uri: string = "mongodb+srv://vercel-admin-user:iK0FaSM7H6EzlkyF@cluster0.npib522.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db: Db;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    db = client.db("Portfolio");
    
    await db.command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    startServer();

  } catch (error) {
    await client.close();
    console.error('Error connecting to MongoDB:', error);
  }

}


function startServer(){

    const users = db.collection('Users');
  
    const emailChecker = async (req: any, res?: any) => {
      const emailData = req.body.email
      
      console.log(emailData)
      try {
        const result = await users.findOne({email: emailData});
        if(result){
          console.log(`Email Exist ${emailData}`)
          return true;
        }else{
          console.log(`Email doesn't exist ${emailData}`)
          return false;
        }
        
      } catch (error) {
        console.error(error);
        console.error('Catch Email');
        res.status(500).json({ message: 'Internal Server Error' });
      }
  
    }






    app.post('/signup', async (req: any, res: any) => {
        const newData: any = req.body;
        console.log(newData);
    
        const emailIsUsed = await emailChecker(req);
    
        if(emailIsUsed){
    
            return res.json({message: 'Email Already Exist'});
    
        }else{
    
          const password = passwordHash(req)
    
          const newDataHashed = {...newData, password: password}
    
          
            try {
              const result = await users.insertOne(newDataHashed);
              console.log('Inserted document:', result.insertedId);
              res.json({response:{message: 'User created successfully', result: result}});
              
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Internal Server Error' });
            } 
    
        }
    
      });



      const passwordHash = async (req: any) => {
        const password: string = req.body.password
        
        const saltRounds: number= 4;
        const salt: string = await bycrypt.genSalt(saltRounds)
      
        const hashedPassword: string = await bycrypt.hash(password, salt);
      
        return hashedPassword;
      }


}

run().catch(console.dir);




  