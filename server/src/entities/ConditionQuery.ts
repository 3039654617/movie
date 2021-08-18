import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, Min } from "class-validator";
import { BaseClass } from "./BaseClass";

export class ConditionQuery extends BaseClass{
    @Type(() => String)
    public name: string = '';

    @IsInt({message: "页码必须是整数"})
    @Min(1, {message: "页码最小值为1"})
    @Type(() => Number)
    public page: number =1;

    @IsInt({message: "页容量必须是整数"})
    @Min(1, {message: "页容量最小值为1"})
    @Type(() => Number)
    public limit: number = 10;

    public static transformerThis(m: {}) {
        return super.plainClass(ConditionQuery, m);
    }
}