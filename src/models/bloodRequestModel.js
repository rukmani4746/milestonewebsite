import mongoose from 'mongoose';
const bloodRequestSchema = mongoose.Schema(
    {
      
        receiverId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        bloodTypeId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true,
    })
    
    const bloodRequest = mongoose.model("BloodRequest", bloodRequestSchema)
export default bloodRequest;