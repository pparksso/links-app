import mongoose from 'mongoose';

const countSchema = new mongoose.Schema({
  user_pk: {
    type: Number,
    required: true
  },
  category_pk: {
    type: Number,
    required: true
  },
  link_pk: {
    type: Number,
    required: true
  }
});

export default mongoose.model('count', countSchema, 'count');
