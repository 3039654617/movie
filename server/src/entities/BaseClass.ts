import { plainToClass } from "class-transformer";
import { validate } from "class-validator";


export abstract class BaseClass {
    protected static plainClass<T>(cls: new (...srgs: any[]) => T, m: {}): T {
        if(m instanceof cls) {
            return m;
        }
        return plainToClass(cls, m)
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