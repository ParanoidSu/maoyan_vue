import axios from 'axios'

export default class Http {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://localhost:8080.com/mmdb',
            timeout: 18000
        })
    }

    get({
        url,
        params = {}
    }) {
        return new Promise((resove, reject) => {
            this.instance.get(url, params)
                .then((result) => {
                    resove(result)
                })
                .catch((err) => { 
                    reject(err)
                 }) 
        })
    }
}