import axios from 'axios'
const baseUrl = '/api/colleges'

const getSchools = () => {
    return axios.get(baseUrl)
}

const getOneSchool = (id) =>{
    return axios.get(`${baseUrl}/${id}`)
}
 //Schools in the same city
const getSchoolsCloseby = (id) => {
    return axios.get(`${baseUrl}/${id}/similar`)
}

// const updatePerson = (objectUpdate, name, id) => {
//     return axios.put(`${baseUrl}/${id}`, objectUpdate)
// }

export default {
    getSchools,
    getOneSchool,
    getSchoolsCloseby
    // deletePerson,
    // updatePerson
}