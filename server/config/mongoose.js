import mongoose from 'mongoose';

export const dbConnect = mongoose
  .connect(process.env.MONGO_URL, {
    dbName: 'links-app',
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((err) => {
    console.log(err);
  });
