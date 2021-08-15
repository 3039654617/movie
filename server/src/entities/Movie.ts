import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, MinLength } from "class-validator";
import "reflect-metadata"

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
}