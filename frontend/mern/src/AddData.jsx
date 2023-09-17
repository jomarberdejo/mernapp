import React, { useState } from 'react';
import axios from 'axios';
import {useGetUserInfo} from './useGetUserInfo';

function AddData({ fetchData }) {
  const [name, setName] = useState('');
  const {userId} = useGetUserInfo()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/data', {
        name,
        userId, // Include the user's ID
      });
      console.log('Data added successfully');
      alert(userId)
      fetchData();
      setName(''); // Clear the input field
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddData;
