require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Create a new Express app
const app = express()

// Middleware
app.use(express.json())
app.use(cors())
// Log incoming requests
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database')
    // Listen to the specified port
    app.listen(process.env.PORT, () => {
      console.log('Listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err)
  })

// Define a Mongoose schema and model for your data
const exampleSchema = new mongoose.Schema({
  name: String,
})

const ExampleModel = mongoose.model('Example', exampleSchema)

// Create a route to get data from the database
app.get('/api/data', async (req, res) => {
  try {
    const data = await ExampleModel.find()
    res.json(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'An error occurred while fetching data' })
  }
})

// Create a route to add data to the database
app.post('/api/data', async (req, res) => {
  try {
    const { name } = req.body;
    const newItem = new ExampleModel({ name });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'An error occurred while adding data' });
  }
});

// Create a route to update data in the database
app.put('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedItem = await ExampleModel.findByIdAndUpdate(id, { name }, { new: true });
    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'An error occurred while updating data' });
  }
});

// Create a route to delete data from the database
app.delete('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ExampleModel.findByIdAndRemove(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'An error occurred while deleting data' });
  }
});
