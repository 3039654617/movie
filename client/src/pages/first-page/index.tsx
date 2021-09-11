import React from 'react'
import action from '../../redux/action'
import store from '../../redux/store'
import './index.less'

const MovieCreate:React.FC<{}> = (props) => {
    // store.dispatch(action.fetchMovies({
        // page: 9,
        // limit: 9
    // }) as any)
//    console.log( store.getState());
   
    return (
        <div className='first-cntainer'>
            <h1>欢迎来到电影王国，挑选好看，精彩的电影！</h1>
        </div>
    )
}

export default MovieCreate;