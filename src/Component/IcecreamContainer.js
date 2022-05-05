import React ,{useState}from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { buyIcecream } from '../redux/iceCream/iceCreamAction'

function HooksCakeContainer() {
    const numOfIcecream = useSelector(state => state.iceCream.numOfIcecream)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState("")

    return (
        <div>
            <h2>Number of Icecream - {numOfIcecream}</h2>
            <input type="text" placeholder="Enter the quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
            <button onClick = {()=>dispatch(buyIcecream(quantity))}>Buy Icecream</button>
        </div>
    )
}

export default HooksCakeContainer
