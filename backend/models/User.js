import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  companyName: { type: String },
  numEmployees: { type: String },
  companyPhone: { type: String },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
