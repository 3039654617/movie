import Mongoose from "mongoose";
import { movieModel } from "./MovieSchema";


Mongoose.connect("mongodb://localhost:27017/myMovies", {
    useNewUrlParser: true,
}).then(() => {
    console.log("数据库已连接");
})

export default movieModel;