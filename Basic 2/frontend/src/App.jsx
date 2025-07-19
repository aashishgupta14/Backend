import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";

function App() {
 let [msg , showMsg]=useState("")

useEffect(() => {
     axios.get('http://localhost:8000')
     .then(res=>showMsg(res.data.message))
     .catch(err=>console.log("err",err))
},[]);

  
  // const [msg, setMsg] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:8000') // ✅ correct route
  //     .then(res => res.json())
  //     .then(data => setMsg(data.message))
  //     .catch(err => console.log(err));
  // }, []);

  return (

    
    <div>
      {/* <button onClick={handleClick}>Click me</button> */}
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
