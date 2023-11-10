import React from 'react'
      //this component says - 4 

             //this.setState()
             //handlerMethod
             //.bind(this)
             //onClick


class Update extends React.Component {
    constructor(props) {
        super(props);

        this.state = { productName : "  "};

        this.UpdateProduct = this.UpdateProduct.bind(this);

    }

    UpdateProduct(){
        this.setState({ productName : " LENOVO "} , function()
                                                            {
                                                           
                                                             console.log(this.state.productName)            
                                                            });
    }
    
    render() { 
        return ( 
            <div>
                <h1>Ur product : {this.state.productName}</h1>
                 <button onClick={this.UpdateProduct}>Update</button>
            </div>
         );
    }
}
 
export default Update;