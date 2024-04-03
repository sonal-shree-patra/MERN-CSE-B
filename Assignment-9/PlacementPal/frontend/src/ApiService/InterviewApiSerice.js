import axios from 'axios'

class InterviewApiService{
    constructor(){
        this.api = "http://localhost:5000"
    }

    async getInterviews(){
        try {
            const res = await axios.get(this.api+"/interview")
            console.log(res.data);
            return {data: res.data, status: true}
        } catch (error) {
            console.log(error);
            return {status: false}
        }
    }

    async getInterviewById(id){
        try {
            const res = await axios.get(`${this.api}/interview/details/${id}`)
            console.log(res.data);
            return {data: res.data[0], status: true}
        } catch (error) {
            console.log(error);
            return {status: false}
        }
    }

    async addInterview(interview){
        try {
            const res = await axios.post(`${this.api}/interview`, interview)
            console.log(res.data);
            return {data: res.data, status: true}
        } catch (error) {
            console.log(error);
            return {status: false}
        }
    }
}


const interviewApiService = new InterviewApiService()
export default interviewApiService