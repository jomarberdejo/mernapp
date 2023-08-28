import {useState, useEffect} from 'react';
import axios from 'axios';
import DataList from './DataList';
import AddData from './AddData';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
    <AddData fetchData= {fetchData} />
    <DataList 
    data= {data}
    />
    </>
  )
}

export default App;
