import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import parser from 'html-react-parser'
import interviewApiService from '../ApiService/InterviewApiSerice'
import questionApiService from '../ApiService/QuestionApiService'

const InterviewDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
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

    const deleteInterview = async (e) => {
        e.preventDefault()
        console.log('Delete..')
        if (interview.questions.length > 0) {
            let questionRes = await questionApiService.deleteQuestion(
                interview.questions[0]._id
            )
            if (!questionRes.status) {
                return
            }
        }
        let interviewRes = await interviewApiService.deleteInterview(id)
        if (interviewRes.status) {
            navigate('/')
        }
    }
    return (
        <>
            {interview && (
                <div className="card">
                    <div className="card-body">
                        <h1>
                            {interview.companyName} - {interview.role}
                        </h1>
                        <p className="text-muted">
                            {interview.place},{' '}
                            {new Date(
                                interview.interviewDate
                            ).toLocaleDateString()}
                        </p>
                        <p className="lead">{interview.broadArea.join(', ')}</p>
                        {interview.questions.length > 0 ? (
                            <>
                                <h3 className="my-1">Questions:</h3>
                                <div>
                                    {parser(interview.questions[0].questions)}
                                </div>
                            </>
                        ) : (
                            <Link to={`/addquestion/${interview._id}`}>
                                Add Questions
                            </Link>
                        )}
                    </div>
                    <div className="text-end p-2">
                        <Link
                            to={`/updateinterview/${interview._id}`}
                            className="btn btn-sm btn-info m-1"
                        >
                            Update
                        </Link>

                        <Link
                            to=""
                            onClick={deleteInterview}
                            className="btn btn-sm btn-danger m-1"
                        >
                            Delete
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default InterviewDetails
