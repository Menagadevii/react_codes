import React,{useEffect,useReducer,type,error,payload,useState} from 'react'
import axios from 'axios'

// function Fetchusered() {
//     const [loading,setLoading] = useState(true)
//     const [error,setError] = useState('')
//     const [post,setPost] = useState({})

//     useEffect(() =>{
//        axios.get('https://6594e34f04335332df819ddb.mockapi.io/employee')
//        .then(response =>{
//         setLoading(false)
//         setPost(response.data)
//         setError('')
//        })
//        .catch(error =>{
//         setLoading(false)
//         setPost({})
//         setError('something went wrong!')
//        })
       
//     },[])
//   return (
//     <div>
//       {loading? 'Loading' : post.title}
//       {error ? error : null}
//     </div>
//   )
// }

// export default Fetchusered

const initialState ={
 loading: true,
 error: '',
 post: {}
}

const reducer =(state,action) => {
  switch(action,type){
    case 'FETCH_SUCCESS':
      return{
        loading:false,
        post:action,payload,
        error:' '
      }
      case 'FETCH_ERROR':
      return{
        loading:false,
        post:{},
        error:'something went wrong! '
  }
  default:
    return state
}
}
export function Fetchusered2(){
  const [state,dispatch] = useReducer(reducer,initialState)
  useEffect(() =>{
    axios.get('https://6594e34f04335332df819ddb.mockapi.io/employee')
    .then(response =>{
     dispatch({type: 'FETCH_SUCCESS',payload:response.data})
    })
    .catch(error =>{
      dispatch({type: 'FETCH_SUCCESS'})
    })
    
    
 },[])
  return(
    <div>
{state.loading? 'Loading' :state. post.title}
//       {state.error ? error : null}
    </div>
  )
}
