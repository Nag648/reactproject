import React,{ useState } from 'react';
import './App.css';


function App() {
  let [counter,updateCounter] = useState(0) 

return(
  <>

      <h1>Counter Value :{counter}</h1>
    <button onClick={() => {
        updateCounter(++counter)
    }}>Change</button>


  </>

)
}

export default App
