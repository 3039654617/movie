import axios from 'axios';

type iMovie = {
    name: string,
    isComing: boolean,
    poster: string | number,
    description: string,
    types: string[],
    areas: string[],
    time: number
}

type iCondition ={
    page?: number,
    limit?: number,
    name?: string

}

export const add = (movie: iMovie) => {
    return axios.post('/api/movie', movie).then(res => {
        return res.data  
    })
}

export const del = (id: string) => {
    return axios.delete('/api/movie/'+ id).then(res => {
        return res
    })
}

export const edit = (id: string, movie: any) => {
    return axios.put('/api/movie/'+ id, movie).then(res => {
        return res
    })
}

export const condition = (data: iCondition) => {
    return axios.get('api/movie', {
        params: data
    }).then(res => res)
}

export const findOne = (id: string) => {
    return axios.get('api/movie/'+ id).then(res => res)
}