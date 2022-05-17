import React from 'react'
import QuestionPose from '../Components/QuestionPose'
import AccessDB from '../Components/AccessDB'

function HomeScreen() {
  return (
    <div>HomeScreen
        <span><QuestionPose></QuestionPose></span>
        <span><AccessDB></AccessDB></span>
    </div>
    
  )
}

export default HomeScreen