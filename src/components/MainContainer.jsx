import {useState} from 'react'
import Button from './Button'
import TextCounter from './TextCounter'

export default function()
{
    const [count, setCounter] = useState("")

    return(
        <div className='main-container'>

            <Button count={count} setCount={setCounter}/>
            <h1>Counter is {count} </h1>
            
        </div>
    )
}