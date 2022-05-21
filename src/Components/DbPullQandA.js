import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Qcard from './Qcard';
import Acard from './Acard';

function DbPullQandA() {

    const [question, setQuestion] = useState([])
    const [answer, setAnswer] = useState([])
    const [masterArr, setMasterArr] = useState([])

   
    useEffect(() => {
        axios.get('/api/a')
      .then((res)=> {
          console.log(res.data)
        setAnswer(res.data)
      })
    }, [])
    

    function createOrderOutOfChaos() {
        let tempArr = []
        let giantArr = []
        answer.map((person, index) => {
          tempArr.push(person.qtext)
        })
        let questionArr = [...new Set(tempArr)]
        
        // console.log(answerArr)
        
        for(let question of questionArr) {
          let newObj = {}
          answer
            .filter((answer, index) => {
              // console.log("answer: ", answer)
              // console.log("person : ", person)
              return answer.qtext === question
            })
            .map((answer, index) => {
              newObj.question = question
              newObj.answers = newObj.answers ? [...newObj.answers, answer.atext] : [answer.atext]
              // console.log(newObj)
              // console.log(giantArr)
              return giantArr.push(newObj)
            })
        }
        // console.log("Giant Array: ", giantArr)
        let finalArr = [...new Set(giantArr)]
        console.log(finalArr)
        setMasterArr(finalArr)
      }
      useEffect(() => {
        createOrderOutOfChaos()

    }, [answer])
      

    
    return (
        <div>AccessDB
        {/* <h2>Questions</h2>
        {question.map((element,index)=> {
            return <Qcard data={element} key={index}/> 
        
        })}*/}
        <h2>answers</h2>
       {masterArr.map((element,index)=> {
            return <Acard data={element} key={index}/>
        
        })}
        



        
    </div>
  )
}

export default DbPullQandA




//   const dbQandAPuller = () => {
//       axios.get('/api/q')
//       .then((res)=> {
//           console.log(res.data)
//         setQuestion(res.data.qtext)
//       })
//       .catch((err)=> {
//           console.log(err.response.data)

//       })
//       axios.get('/api/a')
//       .then((res)=> {
//           console.log(res.data)
//         setAnswer(res.data.atext)
//       })
//       .catch((err)=> {
//           console.log(err.response.data)

//       })
//   }