import { ArrayMinSize, IsNotEmpty, Max, Min } from "class-validator";


export class Movie {
    public poster!: string;
    @IsNotEmpty({message: "电影名称不可以为空 "})
    public name!: string;

    @IsNotEmpty({message: "地区不能为空"})
    public area!: string;

    @IsNotEmpty({message: "类型不能为空"})
    @ArrayMinSize(1, {message: "类型最少有一个"})
    public type!: string[];

    @IsNotEmpty({message: "时长不能为空"})
    @Min(1, {message: "时长最少为1分钟"})
    @Max(999, {message: "时长最多为999分钟"})
    public time!: number;

    @IsNotEmpty({message: "是否上映不能为空"})
    public isComing!: boolean; 

}