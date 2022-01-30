import React, { useState } from 'react';

const Button =()=>{
    let hello="pakistan";
    let changevalue="hello pakistan";

    const [butvalue,setbutvalue]=useState(hello);
 return(   
    <button className='but' onClick={()=>setbutvalue(changevalue)}>
        {butvalue}
    </button>
    );
};
export default Button;