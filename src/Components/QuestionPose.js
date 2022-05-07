import React, {useState} from 'react'

function QuestionPose() {
  const [formData, setFormData] = useState({
      title: '',
      body: '',
      tags: ''
  })

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(formData)
  }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div> <h2>Title</h2>
            <h3>Be specific about what equipment</h3>
            <input type="text"placeholder='Title' onChange={(e)=> setFormData({...formData, title: e.target.value})} value={formData.title} />
            </div>
            <div> <h3>Body</h3>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=> setFormData({...formData, body: e.target.value})} value={formData.body}></textarea>
            </div>
            <div><h3>Tags</h3>
                <input type="text"placeholder='tags'onChange={(e)=> setFormData({...formData, tags: e.target.value})} value={formData.tags}/>
                 </div>
                 
                 <button type='submit'>submit</button>
            </form>
            <div>
                    {formData.title}
                    {formData.body}
                    {formData.tags}
                     
                 </div>
    </div>
  )
}

export default QuestionPose