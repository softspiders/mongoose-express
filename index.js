const mongoose = require('mongoose');

const uri = 'mongodb+srv://AlexanderLapygin:123@mymongo-nadvm.mongodb.net/test?retryWrites=true';
  
mongoose
  .connect(uri)
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => {
    console.log(err)
  });
