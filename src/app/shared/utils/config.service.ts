import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    _apiURI : string;
 
    constructor() {
        this._apiURI = 'http://60.205.216.128:8080/api/';
     }
 
     getApiURI() {
         return this._apiURI;
     }
 
     getApiHost() {
         return this._apiURI.replace('api/','');
     }
}