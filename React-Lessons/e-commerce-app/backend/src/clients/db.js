import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  
  })
  .then(() => console.log('MongoDB: Connectted'))
  .catch((err) => console.log(err.message));
