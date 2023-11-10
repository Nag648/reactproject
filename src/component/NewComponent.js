import React from 'react'

const NewComponent = (props) => {
    let teachername ="suman"
  return (
    <>
    <div>NewComponent</div>
    <h1>{teachername}</h1>
    <h1>{props.data}</h1>
    <h1>name:{props.name} age:{props.age}</h1>
    <h1>{props.age}</h1>
    
    </>
  )
}

export default NewComponent