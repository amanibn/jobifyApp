import mongoose from "mongoose";
import validator from "validator";
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email',
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minLength: 6

    },
    lastName: {
        type: String,
        maxLength: 20,
        trim: true,
        default: 'LastName'
    },
    location: {
        type: String,
        maxLength: 20,
        trim: true,
        default: 'My city'
    },
})
export default mongoose.model('Users', UserSchema)