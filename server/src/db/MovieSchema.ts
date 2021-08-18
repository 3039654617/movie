import Mongoose from "mongoose";
import { Movie } from "../entities/Movie";

export interface IMovie extends Movie, Mongoose.Document{};

const movieSchema = new Mongoose.Schema<IMovie>({
    name: String,
    poster: String,
    types: [String],
    areas: [String],
    isComing: Boolean,
    description: String
}, {
    versionKey: false
})

export const movieModel = Mongoose.model<IMovie>("maoYanMovies", movieSchema);