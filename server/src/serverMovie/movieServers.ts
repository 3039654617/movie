import movieModel from "../db/db";
import { Movie } from "../entities/Movie";


export class MovieServers {

    public static async add (movie: {}): Promise<Movie | string[]> {
        //将平面对象转换为movie实体类
        const newObj = Movie.plainClass(movie);
        //验证
        const validateArr = await newObj.validatorClass();
        //添加
        if(validateArr.length !== 0) {
            return validateArr;
        }

        return await movieModel.create(movie)
    }

    public static async delete (id: string) {
        await movieModel.deleteOne({_id: id})
    }

    public static async edit(id: string, movie: {}): Promise<string[]> {
         //将平面对象转换为movie实体类
         const newObj = Movie.plainClass(movie);
         //验证
         const validateArr = await newObj.validatorClass(true);
         //添加
         if(validateArr.length !== 0) {
             return validateArr;
         }

         await movieModel.updateOne({_id: id}, movie)

         return ['修改成功']
    }

    public static async query(id: string) {
        return await movieModel.findById({_id: id})
    }
}
