import React,{useState} from 'react';
 
const Usetstates = ()=> {
    const [name,setname] = useState("srilakshmi");
    return (
        <div>
            <center>
                <h1>{name}</h1>
                <button onClick={()=>setname("Nagaraju")}>change</button>
            </center>
        </div>
    )
}   
export default Usetstates;