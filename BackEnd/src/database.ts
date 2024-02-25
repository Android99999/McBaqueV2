import mongoose, { Document, Schema } from 'mongoose';
import { Response } from 'express';

// Define the schema interface
interface IUser extends Document {
    firstname: string;
    lastname: string;
    name: string;
    email: string;
    password: string;
    dateCreated: Date;
}

// Define the Mongoose schema
const userSchema: Schema<IUser> = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
   
},{
    timestamps: true // This will add createdAt and updatedAt fields
});

interface ResultType {
    firstname: { type: String},
    lastname: { type: String },
    name: { type: String},
    email: { type: String},
    password: { type: String}
}

interface createdUser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string
    dateCreated: Date;
    // Add other fields as needed
}


export const connectDB = async (mongoURI: string) => {
    try {
          await mongoose.connect(mongoURI, { dbName: "Portfolio" }); 
          console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB: Database', error);
      process.exit(1); // Exit with failure
    }
  };

  const User = mongoose.model('User', userSchema, 'Users');

  export const insertUser = async (userInput: any): Promise<createdUser> => {
      const {firstname, lastname, name, email, password} = userInput;
  
      const newUser = new User({
          firstname: firstname,
          lastname: lastname,
          name: name,
          email: email,
          password: password,
          dateCreated: new Date()
        });
  
      try {
          await newUser.save();
          const savedUser = await User.findOne({ _id: newUser._id }, {_id: 1, name: 1, email: 1, dateCreated: 1 });
          console.log('User created successfully:', savedUser);
            if (!savedUser) {
                throw new Error('User not found after creation');
            }
           return savedUser; // Return the newly created user
         
      } catch (error) {
          console.error('Error creating user:', error);
          throw error; // Throw the error to be handled by the calling function
      }
  
  }

  export const emailExist = async (userEmail: string, res: Response): Promise<boolean> => {
    try {
        const result: ResultType | null | Object = await User.findOne({ email: userEmail }).select('_id name').exec();
        if (result) {
            console.log('Email found:', result);
            return true;
        } else {  
            console.log('No Email found.');
            return false;
        }
    } catch (error) {
        console.error(error);
        console.error('Email Check Error');
        res.status(500).json({ message: 'Internal Server Error' });
        return true;
    }
  }