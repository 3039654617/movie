import { plainToClass, Type } from "class-transformer";
import { ArrayMinSize, IsNotEmpty, validate } from "class-validator";
import { IMovie } from "../db/MovieSchema";

export class Movie {
    public poster!: string;

    @IsNotEmpty({message: "电影名字不能为空"})
    @Type(() => String)
    public name!: string;

    @IsNotEmpty({message: "电影地区不能为空"})
    @ArrayMinSize(1, {message: "上映地区最少有一个"})
    public areas!: string[];

    @ArrayMinSize(1, {message: "电影类型最少有一个"})
    public types!: string[];

    @IsNotEmpty({message: "是否已上映不能为空"})
    public isComing!: boolean;

    @IsNotEmpty({message: "电影描述不能为空"})
    public description!: string;

    public static plainClass(m: {}): Movie {
        if(m instanceof Movie) {
            return m;
        }
        return plainToClass(Movie, m)
    }

    public async validatorClass(flag: boolean = false): Promise<string[] | []> {
        const arr = await validate(this, {
            skipMissingProperties: flag
        });

        const arrArr = arr.map(item => {
            const constraints = item.constraints;
            const obj = {...constraints}
            return Object.values(obj)
        })

        const resultArr: string[] = [];
        arrArr.map(arr => {
            return resultArr.push(...arr);
        })
        return resultArr;
    }
}
