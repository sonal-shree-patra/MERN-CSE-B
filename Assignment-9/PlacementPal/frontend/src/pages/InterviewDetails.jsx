import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import interviewApiService from '../ApiService/InterviewApiSerice'

const InterviewDetails = () => {
    const { id } = useParams()
    const [interview, setInterview] = useState(null)
    async function getInterviewDetails(id) {
        const res = await interviewApiService.getInterviewById(id)
        if (res.status) {
            setInterview(res.data)
        }
    }

    useEffect(() => {
        getInterviewDetails(id)
    }, [id])
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
                        {
                            interview.questions.length > 0 ? (
                                <>
                                    <h3 className='my-1'>Questions:</h3>
                                    <div>
                                        {interview.questions[0].questions}
                                    </div>
                                </>
                            ) : (
                                <Link to="">Add Questions</Link>
                            )
                        }
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default InterviewDetails
