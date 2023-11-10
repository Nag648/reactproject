import React from "react";
import "./Data1.css"
class Data1 extends React.Component {
    
    render() {
        
        const arrayList = this.props.passdata;
        return (
        <div>
           
           <table className="tab">
            <tr>
            <th>Id</th>            
            <th>Name</th>
            <th>City</th>
            </tr>
              
                {arrayList.map( (item )=> (
                    <tr>
                    <td>{item.id}</td>            
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    </tr>
    
                ) ) }
    
           </table>
         
          

        </div>
        );

                }
}
export default Data1;
 
