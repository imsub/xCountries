
import './App.css';
import FlagGrid from './components/Grid/Grid.jsx';
import getCountriesData from "./api/api.js";
import { useEffect,useState } from "react";
function App() {
  const [data,setData] = useState({
    data: [],
    searchData: []
  });
  const searchHandler = (event)=>{
    const inputValue = event.target.value;
    if(inputValue === ''){
      setData({
        ...data,
        searchData: data.data
      })
    }
    else{
      const filterData = data.data.filter((val)=>{
        if(val.name.common.includes(inputValue)){
            return val;
        }
        return false; 
      });
      setData({
        ...data,
        searchData: filterData
      });
    }
  }
useEffect(()=>{
    getCountriesData().then(res =>{
        setData({
            data:res,
            searchData:res
        });
    }).catch(err => console.error("Error fetching data: ",err.message));
},[]);
  return (
    <div className="App">
      <input type="text" onChange={searchHandler} className='inputContainer' placeholder='Search for countries...'></input>
     <FlagGrid data={data}/>
    </div>
  );
}

export default App;
