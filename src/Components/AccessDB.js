import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function AccessDB() {

    const [username, setUsername] = useState([])
    const [trade, setTrade] = useState('')
  
  const dbPrompt = () => {
      axios.get('/api/info')
      .then((res)=> {
          console.log(res.data)
        setUsername(res.data)
        setTrade(res.data.trade)
      })
      .catch((err)=> {
          console.log(err.response.data)

      })
  }
  
    return (
    <div>AccessDB
        {username && username.map((user,index) =>{
            return <h2>{user.username}</h2>
        }) }
        <h3>{trade ? trade : 'no Trade...'}</h3>
        

        <button onClick={dbPrompt}>Access that DBSON</button>
    </div>
  )
}

export default AccessDB