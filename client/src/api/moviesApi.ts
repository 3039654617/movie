import axios from 'axios'

type Imovie = {
    // id: string,
    poster: string | number,
    isComing: boolean,
    name: string,
    types:string[],
    time: number,
    description: string,
    areas: string[]

}
export class MoviesApi {
    public static async add(data: Imovie) {
        return { data } = await axios.post('/api/movie', data)
    }
}