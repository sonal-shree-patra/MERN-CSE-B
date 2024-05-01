
import { useState, useEffect } from 'react'
import InterviewCard from '../comonents/InterviewCard'
import interviewApiService  from '../ApiService/InterviewApiSerice'

const Home = () => {
    const [ interviews, setInterviews ] = useState(null)

    async function getData(){
       let res = await interviewApiService.getInterviews();
       if(res.status){
        setInterviews(res.data)
       }
    }
    useEffect(()=>{
        getData()
    }, [])

    if(!interviews) return
  return (
    <div className='d-flex flex-wrap'>
    {
       interviews.map( interview => <InterviewCard key={interview._id} interview={interview} />)
    }
    </div>
  )
}

export default Home
