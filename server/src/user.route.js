const { Router } = require('express')
const User = require('./models/user.model')
const mongoose = require('mongoose'); // Import mongoose module

const userRouter = Router()

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

module.exports = userRouter
