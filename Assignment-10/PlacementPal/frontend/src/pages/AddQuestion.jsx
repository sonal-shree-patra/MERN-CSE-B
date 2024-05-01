import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import interviewApiService from '../ApiService/InterviewApiSerice'
import questionApiService from '../ApiService/QuestionApiService'

const AddQuestion = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const questionRef = useRef(null)
    const [interview, setInterview] = useState(null)
    const [error, setError]=useState("")
    async function getInterviewDetails(id) {
        const res = await interviewApiService.getInterviewById(id)
        if (res.status) {
            setInterview(res.data)
        }
    }

    useEffect(() => {
        getInterviewDetails(id)
    }, [id])

    async function handleSubmit(e){
        e.preventDefault();
        const newQuestion = {
            interviewId: id,
            questions: questionRef.current.value
        }
        const res = await questionApiService.addQuestion(newQuestion);
        if(res.status){
            navigate("/")
        } else {
            setError("Error while adding questions")
        }
    }   

    if (!interview) return

    return (
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h1>
                            {interview.companyName} - {interview.role}
                        </h1>
                        <p className='text-danger'>{error}</p>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <ReactQuill
                                ref={questionRef}
                                style={{
                                    height: '300px',
                                    width: '100%',
                                    display: 'inline-block',
                                }}
                                placeholder='Add Your Questions'
                                required
                            />
                            <input type='submit' className='btn btn-primary w-100' value="Add Question" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddQuestion
