// import { plainToClass } from "class-transformer";
// import { validate } from "class-validator";
// import { Movie } from "./entities/Movie";
import "reflect-metadata"
import movieModel from "./db/db";

// // const obj = new Movie();

// // obj.poster = '';
// // obj.name = '三傻大闹天空';
// // obj.areas = [""];
// // obj.types = [""];
// // obj.description = '这是电影1';
// // obj.isComing = true

// const obj = {
//     poster: '',
//     name: 1,
//     areas: [""],
//     types: [""],
//     description: '这是电影1',
//     isComing: true
// }


movieModel.find().then((data) => {
    data.map(item => {
        console.log(item.name);
    })
})