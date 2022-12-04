const mongoose = require('mongoose');

//Testing DB connection using mongoose
mongoose.connect(process.env.MONGO_URL_CONNECT, () => {
  console.log("Connected to MongoDB on Database ", process.env.MONGO_DATABASE)
});