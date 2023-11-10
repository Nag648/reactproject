import React,{useState} from 'react'


const Onchange = ()=> {
    const [user,setuser] = useState("");
    const handler = e =>{
        setuser(e.target.value)
    }

    return(
        <div>
            <center>
                <input type='text'placeholder='username' value={user} name="user"
                onChange={handler}/> <br/>

                {user}
            </center>
        </div>
    )
}
export default Onchange