import React from 'react'
import HomeCard from './HomeCard'
import axios from 'axios'
import { useState, useEffect } from 'react'
import homeData from '../../server/homeData'

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
        <div>tileDsp
        
        <h2>answers</h2>
       {data.map((element,index)=> {
            return <HomeCard data={element} key={index}/>
        
        })}
        



        
    </div>
    )
}

export default HomeTileDisp