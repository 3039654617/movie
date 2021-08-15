
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Movie } from "./entities/Movie";

// const obj = new Movie();

// obj.poster = '';
// obj.name = '三傻大闹天空';
// obj.areas = [""];
// obj.types = [""];
// obj.description = '这是电影1';
// obj.isComing = true

const obj = {
    poster: '',
    name: 1,
    areas: [""],
    types: [""],
    description: '这是电影1',
    isComing: true
}

let plain = plainToClass(Movie, obj)

validate(plain).then((err) => {
    console.log(err, plain);
})