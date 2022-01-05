import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'; 

//fetching all contacts from the db
const getAll = () => {
    return axios.get(baseUrl); 
}

//adding a new contact to the db
const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
} 

const helper= {getAll, create, update};

export default helper;