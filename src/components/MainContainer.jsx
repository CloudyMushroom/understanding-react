import {useState} from 'react'
import Button from './Button'
import TextCounter from './TextCounter'

export default function()
{
    const [count, setCounter] = useState(0)

    return(
        <div className='main-container'>

            <Button count={count} setCount={setCounter}/>

            <TextCounter count={count}/>
            
        </div>
    )
}