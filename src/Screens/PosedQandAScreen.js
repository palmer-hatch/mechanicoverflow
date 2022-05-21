import React from 'react'
import AccessDB from '../Components/AccessDB'
import DbPullQandA from '../Components/DbPullQandA'
import QuestionPose from '../Components/QuestionPose'

function PosedQandAScreen() {
  return (
    <div>PosedQandAScreen

      
      <DbPullQandA></DbPullQandA>
      <span><QuestionPose></QuestionPose></span>
      <span><AccessDB></AccessDB></span>
    </div>

  )
}

export default PosedQandAScreen