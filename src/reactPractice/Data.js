import React from "react";
import Data1 from "./Data1.js"
import DataFun from "./DataFun.js";
export default function Data() {
    

  const arobj = [
    {id: 23, name:"Srilakshmi",city:"guntur"},
    {id: 24, name:"Shirisha",city:"mumbai"},
    {id: 25, name:"Raju",city:"hyderabad"},
    {id: 26, name:"Naveen",city:"bangalore"},
    {id: 27, name:"Ragu",city:"guntur"}

  ];
  const name = 'srilakshmi';
return ( 
    <div className="Data">
       <Data1 passdata={arobj} ></Data1>
       <DataFun pass={name}></DataFun>
    </div>
);

}
