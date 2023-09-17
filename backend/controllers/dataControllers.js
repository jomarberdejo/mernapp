// dataController.js
const ExampleModel = require('../models/ExampleModel');

// GET data from the database
const getData = async (req, res) => {
  try {
    const data = await ExampleModel.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};

// POST data to the database
const addData = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const newItem = new ExampleModel({ name , userId});
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding data:', error);
    res.status(500).json({ error: 'An error occurred while adding data' });
  }
};

// PUT (update) data in the database
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedItem = await ExampleModel.findByIdAndUpdate(id, { name }, { new: true });
    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'An error occurred while updating data' });
  }
};

// DELETE data from the database
const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await ExampleModel.findByIdAndRemove(id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'An error occurred while deleting data' });
  }
};

module.exports = {
  getData,
  addData,
  updateData,
  deleteData,
};
