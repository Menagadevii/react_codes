import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Fetching() {
    const [posts,setPosts] = useState([])
    // const [id,setId] = useState(1)

    useEffect(() =>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('https://6594e34f04335332df819ddb.mockapi.io/employee')
        .then(res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    },[])

  return (
    <div>
        {/* <input type="text" value={id} onChange ={e => setId(e.target.value)}/> */}
        <div>{posts.title}</div>
      <ul>
        {
            posts.map(post => (
                <li key ={post.id}>{post.id}=={post.title}=={post.body}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Fetching
