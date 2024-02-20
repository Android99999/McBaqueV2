import express  from "express"; // nodejs framework
import cors from "cors";//middleware for security / to received request only to set sites/origin. 
// import mysql2 from "mysql2"; //liblary for npm and database purpose
import helmet from 'helmet'//middleware for security from attacks
import bycrypt from "bcrypt"

import cookieParser from "cookie-parser"; //cookie purposes

import { connectDB, insertUser } from './database.js';

const app = express();
const port: number = 8080;

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

interface corsvalues {
    origin: string[],
    methods:string[],
    credentials: boolean,
    optionsSuccessStatus: number,
}

app.use(cors (<corsvalues>{
    origin: ["http://localhost:5173", 'https://mcbaquev2.vercel.app/', 'https://mcbaquev2.vercel.app/signup'],
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 204,
}))




app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

// Error handling for server setup
app.on('error', (err) => {
    console.error('Server error:', err);
});


const MongoDB_URI = "mongodb+srv://vercel-admin-user:hBojOvCZeapjKL4j@cluster0.npib522.mongodb.net/?retryWrites=true&w=majority";

await connectDB(MongoDB_URI);
  

  
    // const emailChecker = async (req: any, res?: any) => {
    //   const emailData = req.body.email
      
    
    // }


      // const passwordHash = async (req: any) => {
      //   const password: string = req.body.password
        
      //   const saltRounds: number= 4;
      //   const salt: string = await bycrypt.genSalt(saltRounds)
      
      //   const hashedPassword: string = await bycrypt.hash(password, salt);
      
      //   return hashedPassword;
      // }

      app.post('/signup', async (req: any, res: any) => {
        
        const { firstname, lastname, name, email, password } = req.body;
        const newuser = { firstname, lastname, name, email, password};
        try {
            const createdUser = await insertUser(newuser);
            res.status(200).json({ response: { message: 'User created successfully', user: createdUser } });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    
      });





export default app;



  