const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoutes = require('./user.route')

const app = express()
const port = 3001
app.use(cors())

const dotenv = require('dotenv')

dotenv.config()

// MongoDB connection
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

// Get user schema
const Applicant = require('./models/user.model')

app.use(bodyParser.json())
app.use(express.json())

userRouter.get('/', async (req, res) => {
  try {
    const db = mongoose.connection.client.db('user_data')
    const collection = db.collection('user_info') // Access the 'user' collection

    const allData = await collection.find().toArray() // Find all users and convert to array
    console.log(allData) // Log all the retrieved data to the console
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Internal server error route ${error.message}`,
      })
  }
})


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
