import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  category_pk: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  user_pk: {
    type: Number,
    required: true
  }
});

export default mongoose.model('category', categorySchema, 'category');
