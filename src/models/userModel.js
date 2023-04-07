import mongoose from 'mongoose';
import validator from 'validator';
    
    const userSchema = mongoose.Schema(
        {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            email: {
                type: String,
                required: true,
                trim: true,
                lowercase: true,
                validate(value) {
                    if (!validator.isEmail(value)) {
                        throw new Error('Invalid email');
                    }
                },
            },
            password: {
                type: String,
                required: true,
                trim: true,
                minlength: 8,
                validate(value) {
                    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                        throw new Error('Password must contain at least one letter and one number');
                    }
                },
                private: true
            },
            role: {
                type: String,
                enum: ["hospital", "receiver"],
                default: 'receiver',
            },
            //for soft deletion of user
            isDeleted: {
                type: Boolean,
                default: false
            },
            deletedAt: {
                type: Date,
                default: new Date()
            }
        }, {
        timestamps: true,
    })
    const User = mongoose.model("userModel",userSchema)
    export default User;
    
  