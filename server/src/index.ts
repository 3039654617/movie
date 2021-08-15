import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Movie } from "./entity/Movie";

// let obj = new Movie();
// obj.name = "penglang";
// obj.area="中国贵州";
// obj.poster="";
// obj.type= ["喜剧"];
// obj.isComing = true;
// obj.time = 100

let plain = {
    name : "penglang",
    area:"中国贵州",
    poster:"",
    type: ["喜剧"],
    isComing : true,
    time : 100
}

let obj = plainToClass(Movie, plain)

validate(obj).then((err) => {
    console.log(err); 
    
})
