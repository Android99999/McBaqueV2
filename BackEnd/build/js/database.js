import mongoose from 'mongoose';
// Define the Mongoose schema
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
export const connectDB = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI, { dbName: "Portfolio" });
        console.log('MongoDB connected');
    }
    catch (error) {
        console.error('Error connecting to MongoDB: Database', error);
        process.exit(1); // Exit with failure
    }
};
const User = mongoose.model('User', userSchema, 'Users');
export const insertUser = async (userInput) => {
    const { firstname, lastname, name, email, password } = userInput;
    const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        name: name,
        email: email,
        password: password,
    });
    try {
        await newUser.save();
        console.log('User created successfully:', newUser);
        return newUser; // Return the newly created user
    }
    catch (error) {
        console.error('Error creating user:', error);
        throw error; // Throw the error to be handled by the calling function
    }
};
