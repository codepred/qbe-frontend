import axios from 'axios';

class ClientService {

    async getClientsData() {

        return await axios({
            method: 'GET',
            url: 'http://localhost:8080/customer/list',
            headers: {
            }
        })
            .then(res => res)
            .catch(err => err.response)
    }

    async getFilteredClientsData() {

        return await axios({
            method: 'GET',
            url: 'http://localhost:8080/customer/limited',
            headers: {
            }
        })
            .then(res => res)
            .catch(err => err.response)
    }

    async firstNameList(fName) {
        console.log(fName)
        return await axios({
            method: 'GET',
            url: 'http://localhost:8080/customer/' + fName,
            headers: {
            },
        })
            .then(res => res)
            .catch(err => err.response)
    }

    async firstNameEndsWith(fName) {
        console.log(fName)
        return await axios({
            method: 'GET',
            url: 'http://localhost:8080/customer/firstname',
            headers: {
            },
            params: {
                endsWith: fName
            }
        })
            .then(res => res)
            .catch(err => err.response)
    }

    async lastNameEndsWith(fName) {
        console.log(fName)
        return await axios({
            method: 'GET',
            url: 'http://localhost:8080/customer/lastname',
            headers: {
            },
            params: {
                endsWith: fName
            }
        })
            .then(res => res)
            .catch(err => err.response)
    }

    async balance(min,max) {
        console.log(min)
        console.log(max)
        return await axios({
            method: 'GET',
            url: 'http://localhost:8080/customer/balance',
            headers: {
            },
            params: {
                min: min,
                max: max
            }
        })
            .then(res => res)
            .catch(err => err.response)
    }

    
    
}

export default new ClientService()