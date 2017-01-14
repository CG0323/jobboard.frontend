export interface Pagination {
    TotalItems : number;
}
 
export class PaginatedResult<T> {
    result :  T;
    pagination : Pagination;
}
 
export interface Predicate<T> {
    (item: T): boolean
}

export interface ISkill {
    id?: number;
    name?: string;
    keyWords?: string;
    isReg?: boolean;
    temperature?: number;
}

export interface IJob {
    id: number;
    postAt: Date;
    title: string;
    employer: string;
    province: string;
    city: string;
    url: string;
    analyzed:boolean;
    skills: number[];
    content: string;
}