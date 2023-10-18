import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [api,setApi]=useState("")
  useEffect(()=>{
    fetch('http://localhost:3000/anime')
    .then(res=>res.json())
    .then(data=>setApi(data))
  },[])
  return (
    <div className="App">
    Hello World
    {/* <h2>{api.title}</h2> */}
    </div>
  );
}

export default App;
