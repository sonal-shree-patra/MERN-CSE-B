import axios from "axios";

class QuestionApiService{
    constructor(){
        this.api = String(import.meta.env.VITE_BACKEND_API)
    }

    async addQuestion(question){
        try {
            const res = await axios.post(`${this.api}/question`, question)
            console.log(res.data);
            return {data: res.data, status: true}
        } catch (error) {
            console.log(error);
            return {status: false}
        }
    }
}

const questionApiService = new QuestionApiService()
export default questionApiService