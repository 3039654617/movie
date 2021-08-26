import "reflect-metadata"
import Express from "express"
import {Router} from './movieApi/movieApi';
import imgRouter from './movieApi/uploadApi';

const app = Express();

app.use(Express.json())

app.use('/api/upload', imgRouter)
app.use('/api/download', Express.static('./assets'))
app.use('/api/movie', Router)

app.listen(3000);


// import { plainToClass } from "class-transformer";
// import { validate } from "class-validator";
// import { Movie } from "./entities/Movie";
// import "reflect-metadata"
// import movieModel from "./db/db";
// import { MovieServers } from "./serverMovie/movieServers";

// // const obj = new Movie();

// obj.poster = '';
// // obj.name = '三傻大闹天空';
// // obj.areas = [""];
// // obj.types = [""];
// // obj.description = '这是电影1';
// // obj.isComing = true

// for(let i = 0; i < 300; i++) {
    // const obj = {
        // name: `迪迦奥特曼第${i}部`,
        // types: ["玄幻"],
        // time: 199,
        // description: `迪迦奥特曼第${i}部最好看`,
        // isComing: true,
        // poster: 111,
        // areas: ["中国大陆"] 
    // }
// 
    // MovieServers.add(obj).then((e) => {
    //   console.log(e);  
    // })  
// }

// movieModel.find().then((data) => {
    // data.map(item => {
        // console.log(item.name);
    // })
// })

// MovieServers.add(obj).then((e) => {
    // console.log(e); 
// })  

// MovieServers.delete("611a9bc2e15edf2f5cd3c18e");611a9ef26b27b01d003dea1f
// 
// MovieServers.edit('611a9ef26b27b01d003dea1f', obj).then(e => {
    // console.log(e);   
// })

// MovieServers.query('611a9ef26b27b01d003dea1f').then(e => {
    // console.log(e);
    // 
// })

// MovieServers.conditionQuery({name: '彭'}).then((e) => {
    // console.log(e); 
// })