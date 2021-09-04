import React, {useState, useEffect} from 'react'
import axios from 'axios'

type movie = {
    name: string,
    isComing: boolean,
    poster: string | number,
    description: string,
    types: string[],
    areas: string[],
    time: number
}
export default function Index() {
    const [state, setState] = useState([])

    const obj = {
        name: `迪力巴巴奥特曼第${888}部`,
        types: ["浪"],
        time: 169,
        description: `迪力巴巴奥特曼奥特曼第${888}部最好看`,
        isComing: true,
        poster: 111,
        areas: ["中国大陆"]
       }
    //    MoviesApi.add(obj).then(data => {
        // console.log(data); 
    //    })
    
    // const items = state.forEach(item => {
        // console.log(item);
        
        // return (
            // <li>{item.name}</li>
        // )
    // })
    // console.log(items);
    
    useEffect(() => {
        // axios.post('/api/movie', obj).then(data => {
            // console.log(data.data.data.name);  
            // setState(data.data.data)
        // })

        axios.get('/api/movie', {params: {page: 8, limit: 10}}).then(data => {
            // console.log(data.data.data.data);
            // 
            // setState(data.data.data.data)
            // const items = data.data.data.data.forEach((item) => {
                // console.log(item);
                
                // return item.name
            // })
            // setState(items)
            const arr = data.data.data.data.map((e: any) => e.name)
            const arrList = arr.map((e: any) => {
                return (
                    <li>{e}</li>
                )
            })
            setState(arrList)
            console.log(arrList);
            
        })
    }, [])
    console.log(state);
    
    return (
        <div>
            {state}
        </div>
    )
}
