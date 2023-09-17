import {useState, useEffect} from 'react';
import axios from 'axios';
import DataList from './DataList';
import AddData from './AddData';
import {useNavigate} from 'react-router-dom';
import {useGetUserInfo} from './useGetUserInfo';

function Home() {
  const [data, setData] = useState([]);
  
  const navigate = useNavigate();
  const {userName, userId} = useGetUserInfo()
  
  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/data');
      const fetchedData = response.data;
    const filteredData = fetchedData.filter((d) => d.userId === userId);
    setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const handleSignOut = () => {
    alert('Logout successfully with a username of ' + userName);
    localStorage.clear();
    navigate('/');
  }
  
  
  

  return (
    <>
    <h1> {userName} </h1>
    <h1> {userId} </h1>
    <button onClick= {handleSignOut}> LogOut </button>
    <AddData fetchData= {fetchData} />
    <DataList 
    data= {data}
    fetchData= {fetchData}
    />
    
    </>
  )
}

export default Home;
