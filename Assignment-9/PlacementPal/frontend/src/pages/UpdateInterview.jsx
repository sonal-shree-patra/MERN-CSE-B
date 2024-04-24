import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import interviewApiService from '../ApiService/InterviewApiSerice'
import questionApiService from '../ApiService/QuestionApiService'
import { formatDate } from '../utils/helperFunctions'

const UpdateInterview = () => {
    const companyNameRef = useRef(null)
    const interviewDateRef = useRef(null)
    const roleRef = useRef(null)
    const placeRef = useRef(null)
    const broadAreaRef = useRef(null)
    const isFresherRef = useRef(null)

    const [message, setMessage] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()
    const questionRef = useRef(null)
    const [interview, setInterview] = useState(null)

    async function getInterviewDetails(id) {
        const res = await interviewApiService.getInterviewDetailsById(id)
        if (res.status) {
            setInterview(res.data)
        }
    }

    useEffect(() => {
        getInterviewDetails(id)
    }, [id])

    async function handleSubmit(e) {
        e.preventDefault()
        setMessage('')
        const updatedInterview = {
            companyName: companyNameRef.current.value,
            interviewDate: interviewDateRef.current.value,
            place: placeRef.current.value,
            role: roleRef.current.value,
            broadArea: broadAreaRef.current.value.split(','),
            isFresher: isFresherRef.current.checked,
        }

        const updatedQuestions = {
            interviewId: id,
            questions: questionRef.current.value
        }
        // console.log(updatedInterview)
        console.log(updatedQuestions);
        let interviewRes = await interviewApiService.updateInterview(id, updatedInterview)
        let questionRes = null;
        if(interview.questions.length > 0){
            questionRes = await questionApiService.updateQuestion(interview.questions[0]._id, updatedQuestions)
        } else {
            questionRes = await questionApiService.addQuestion(updatedQuestions)
        }
        if (interviewRes.status && questionRes.status) {
            setMessage('Update Successfully')
        } else {
            setMessage('Error')
        }
    }

    if(!interview) return;

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center my-2">
                            Update Interview
                        </h3>
                        <p className="text-center">{message}</p>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label>Company Name</label>
                                <input
                                    ref={companyNameRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="Name of the company"
                                    defaultValue={interview.companyName}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label>Place</label>
                                <input
                                    ref={placeRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="Location of Interview"
                                    defaultValue={interview.place}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label>Interview Date</label>
                                <input
                                    ref={interviewDateRef}
                                    type="date"
                                    className="form-control"
                                    defaultValue={formatDate(interview.interviewDate)}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label>Role</label>
                                <input
                                    ref={roleRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="Job Role"
                                    defaultValue={interview.role}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label>Broad Area</label>
                                <input
                                    ref={broadAreaRef}
                                    type="text"
                                    className="form-control"
                                    placeholder="DS, DBMS, OS, Testing"
                                    defaultValue={interview.broadArea.join(", ")}
                                    required
                                />
                            </div>
                            <div className="mb-1">
                                <label>Is it for the freshers</label>
                                <input
                                    ref={isFresherRef}
                                    type="checkbox"
                                    className="ms-3"
                                    defaultChecked={interview.isFresher}
                                />
                            </div>
                            <div className="my-1">
                                <ReactQuill
                                    ref={questionRef}
                                    style={{
                                        height: '300px',
                                        width: '100%',
                                        display: 'inline-block',
                                    }}
                                    placeholder="Add Your Questions"
                                    defaultValue={interview?.questions[0]?.questions}
                                    required
                                />
                            </div>
                            <div className="my-2">
                                <input
                                    type="submit"
                                    value="Update"
                                    className="btn btn-primary w-100"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateInterview
