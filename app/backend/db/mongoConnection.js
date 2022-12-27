const mongoose = require('mongoose');

//Testing DB connection using mongoose
mongoose.set('strictQuery', false);
mongoose.connect(
  process.env.MONGO_URL_CONNECT,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  },
  () => {
  console.log("Connected to MongoDB on Database ", process.env.MONGO_DATABASE)
});