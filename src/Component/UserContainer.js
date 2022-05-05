import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/user/userAction'
import { buyCake } from '../redux/cakes/cakeActions'

export default function UserContainer() {
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUser())
    },[])
    

    
    const loading = useSelector(state => state.user.loading)
    const users = useSelector(state => state.user.users)
    const numOfCakes = useSelector(state =>state.cake.numOfCakes)
    
    // console.log(users)
    return (
        <div> 
            {
            loading?
            <p>Loading...</p>:
            users.map((user)=>{
                return(
                    <>
                    <p>{user.id} - {user.name}</p>
                    </>
                )
            })}
            <p>{numOfCakes}</p>
            <button onClick = {()=>dispatch(buyCake())}>Buy Cake</button>
            
        </div>
    )
}
