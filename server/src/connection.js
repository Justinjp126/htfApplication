const mongoose = require('mongoose')
const mongoURI =
  'mongodb+srv://HacktheFutureUsername:HacktheFuturePassword@hackthefuturedata.mpxva9q.mongodb.net/'

mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('connected')
    }
  }
)
