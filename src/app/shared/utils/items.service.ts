import { Injectable } from '@angular/core';
import { Predicate } from '../interfaces'
 
 
@Injectable()
export class ItemsService {
 
    constructor() { }

   
    /*
    Util method to serialize a string to a specific Type
    */
    getSerialized<T>(arg: any): T {
        return <T>JSON.parse(JSON.stringify(arg));
    }
}