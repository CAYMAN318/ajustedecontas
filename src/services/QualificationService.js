import axios from "axios"

export class QualificationService {
    static serverURL = `http://localhost:9090`

    static getAllQualifications(){
        let dataURL = `${this.serverURL}/qualifications`
        return axios.get(dataURL)
    }

    static getQualification(qualificationId) {
        let dataURL = `${this.serverURL}/qualifications/${qualificationId}`
        return axios.get(dataURL)
    }

    static createQualification(qualification){
        let dataURL = `${this.serverURL}/qualifications/`
        return axios.post(dataURL,qualification)
    }

    static updateQualification(qualification,qualificationId){
        let dataURL = `${this.serverURL}/qualifications/${qualificationId}`
        return axios.put(dataURL,qualification)
    }    

    static deleteQualification(qualificationId){
        let dataURL = `${this.serverURL}/qualifications/${qualificationId}`
        return axios.delete(dataURL)
    }
    static getAllSoldos(){
        let dataURL = `${this.serverURL}/soldos/`
        return axios.get(dataURL)
    }
    static getSoldo(qualification){
        let soldoId = qualification.soldoId
        let dataURL = `${this.serverURL}/soldos/${soldoId}`
        return axios.get(dataURL)
    }
}