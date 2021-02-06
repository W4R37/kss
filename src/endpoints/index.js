import axios from '../utils/axios';

export function submit(data) {
    return axios.post('/email', data)
}