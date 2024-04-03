import React from 'react'
import { Link } from 'react-router-dom'

const InterviewCard = ({ interview }) => {
    const { _id, companyName, interviewDate, place, role } = interview
    return (
        <Link to={`interview/${_id}`} className='text-decoration-none'>
            <div className="card rounded-0 m-2 border-2 interview-card">
                <div className="card-body">
                    <p className="fw-bold">
                        {companyName} - {role}
                    </p>
                    <p>
                        {place}, {new Date(interviewDate).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default InterviewCard
