import { useRef, useState } from 'react'
import interviewApiService from '../ApiService/InterviewApiSerice'

const AddInterview = () => {
  const companyNameRef = useRef(null)
  const interviewDateRef = useRef(null)
  const roleRef = useRef(null)
  const placeRef = useRef(null)
  const broadAreaRef = useRef(null)
  const isFresherRef = useRef(null)

  const [ message, setMessage ] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    setMessage("")
    const newInterview = {
      companyName : companyNameRef.current.value,
      interviewDate : interviewDateRef.current.value,
      place : placeRef.current.value,
      role : roleRef.current.value,
      broadArea : broadAreaRef.current.value,
      isFresher : isFresherRef.current.checked,
    }
    console.log(newInterview);
    let res = await interviewApiService.addInterview(newInterview)
    if(res.status){
      setMessage("Added Successfully")
      companyNameRef.current.value = ""
      interviewDateRef.current.value = ""
      placeRef.current.value = ""
      roleRef.current.value = ""
      broadAreaRef.current.value = ""
    } else {
      setMessage("Error")
    }
  }

  return (
    <div className='row'>
      <div className="col-md-6 mx-auto">
      <div className="card">
        <div className="card-body">
          <h3 className='text-center my-2'>Add A New Interview</h3>
          <p className='text-center'>{message}</p>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="mb-1">
              <label>Company Name</label>
              <input ref={companyNameRef} type='text' className='form-control' placeholder='Name of the company' required />
            </div>
            <div className="mb-1">
              <label>Place</label>
              <input ref={placeRef} type='text' className='form-control' placeholder='Location of Interview' required />
            </div>
            <div className="mb-1">
              <label>Interview Date</label>
              <input ref={interviewDateRef} type='date' className='form-control'required />
            </div>
            <div className="mb-1">
              <label>Role</label>
              <input ref={roleRef} type='text' className='form-control' placeholder='Job Role' required />
            </div>
            <div className="mb-1">
              <label>Broad Area</label>
              <input ref={broadAreaRef} type='text' className='form-control' placeholder='DS, DBMS, OS, Testing' required />
            </div>
            <div className="mb-1">
              <label>Is it for the freshers</label>
              <input ref={isFresherRef} type='checkbox' className='ms-3' />
            </div>
            <div className="my-2">
              <input type='submit' className='btn btn-primary w-100' />
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddInterview
