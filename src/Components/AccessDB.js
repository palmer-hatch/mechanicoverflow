import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function AccessDB() {

    const [username, setUsername] = useState('')
    const [trade, setTrade] = useState('')
  
  const dbPrompt = () => {
      axios.get('/api/info')
      .then((res)=> {
          console.log(res.data)
        setUsername(res.data.username)
        setTrade(res.data.trade)
      })
      .catch((err)=> {
          console.log(err.response.data)

      })
  }
  
    return (
    <div>AccessDB
        <h2>{username ? username: 'No Username ...'}</h2>
        <h3>{trade ? trade : 'no Trade...'}</h3>

        <button onClick={dbPrompt}>Access that DBSON</button>
    </div>
  )
}

export default AccessDB