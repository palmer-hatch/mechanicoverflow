import React from 'react'
import HomeCard from './HomeCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import homeData from '../homeData'

function HomeTileDisp() {
  
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/')
        .then((res)=> {
            console.log(res.data)
          setData(res.data)
        })
    }, [data])
  
  
    return (
        <div>
        
        <h1>Topics</h1>
       {homeData.topics.map(t => (<div>
            <img src={t.imgUrl} alt={t.name} />
            <p>{t.name}</p>
            </div> ))
       }
            
        
       
        



        
    </div>
    )
}

export default HomeTileDisp