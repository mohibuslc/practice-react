

import Userinfo from "../Userinfo";


export default function Child({ info , handleClick }){

    return (
      
        <div className="components">
        <div className="product" >

        { 
        
        info.map((pd) => <Userinfo userInfo={pd } handleClick={handleClick}></Userinfo>)
        }
</div>


<div className="cart">

<h2>Order-Summery</h2>

</div>

        
</div>
        
       
         
      );
    }
   
    
    
    
    
    
    
    