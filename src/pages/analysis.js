import React from 'react'
// import QuestionInput from '../components/question-input'
import PredictText from '../components/predict-textarea'


function Analysis() {
  return (
    <div className='analysis-main'>
      <div className='text-unit'>
        <h2 className='analysis-title'>Your input:</h2>
        <PredictText text="Input text here..."/>
        <h2 className='analysis-title'>Next words:</h2>
        <PredictText text="Predicted text here..."/>
      </div>
      <div className='analysis-unit'>
        <p>Analysis</p>
      </div>
    </div>
  )
}

export default Analysis
