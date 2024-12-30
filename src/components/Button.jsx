import {useState} from 'react';

export default function Button(props)
{       
    const HandleClick = () =>
    {        
        props.setCount(props.count + 1)
        console.log(props.count)
    }


    return (
        <button onClick={HandleClick} className='btn-counter'>
            COUNTER        
        </button>    
    )
}



