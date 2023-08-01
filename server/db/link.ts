import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
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
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

export default mongoose.model('link', linkSchema, 'link');
