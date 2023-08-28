import { useState } from 'react';
import axios from 'axios';

function DataList({ data , fetchData }) {
  const [updatedName, setUpdatedName] = useState('');
  
  

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:4000/api/data/${id}`, { name: updatedName });
      fetchData(); // Fetch updated data after the update
      setUpdatedName(''); // Reset input field
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/data/${id}`);
      fetchData(); // Fetch updated data after the delete
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data?.map(item => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleUpdate(item._id)}>Update</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New name"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DataList;
