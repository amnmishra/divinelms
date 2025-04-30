import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const teacherSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  dob: String,
  gender: String,
  subjects: [String], // Subjects the teacher is handling
  academicYear: String, // Current academic year
  department: String, // Department or faculty the teacher belongs to
  contact: String,
  address: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  teacherId: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
  },
}, { timestamps: true });

teacherSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

teacherSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('Teacher', teacherSchema);
