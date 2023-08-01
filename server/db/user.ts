import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  pk: {
    type: String,
    required: true
  },
  access_token: {
    type: String,
    required: true
  },
  refresh_token: {
    type: String,
    required: true
  },
  category: {
    type: Array,
    required: true
  }
});

export default mongoose.model('user', userSchema, 'user');
