import React from 'react';
import axios from 'axios';
import './external.css';
class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myarr:[] };
    }

    componentDidMount() {
        axios.get('https://akashsir.in/myapi/ecom1/api/api-view-product.php')
        .then(res=>
            {
                this.setState({myarr:res.data.product_list});
            })
    }

    render() {
        return (    
            <>
                <h1 style={{fontSize:'100px'}}>Product</h1>
               <div className='main'>
                   
               <div class="container">
                    {this.state.myarr.map((value)=>
                    (
                      
                       
                        <div class="card">
                          <img src={value.product_image}alt="Person" class="card__image"></img>
                          <p class="card__name">{value.product_name}</p>
                          <div class="grid-container">
                      
                            <div class="grid-child-posts">
                              {value.product_price} Rs
                            </div>
                      
                            <div class="grid-child-followers">
                              {value.product_details}
                            </div>
                      
                          </div>
                         </div>     
                        
                    ))}
                     </div>
            </div>
            </>
        );
    }
}

export default Task;