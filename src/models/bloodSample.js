import mongoose from  'mongoose'
const bloodSchema = mongoose.Schema(
    {
        hospitalId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        bloodType: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
            required: true

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
    },
    {
        timestamps: true,
    })
 const blood = mongoose.model("Blood", bloodSchema)
export default blood;