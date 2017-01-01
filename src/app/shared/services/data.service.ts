import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
import { ISkill,IJob,Pagination, PaginatedResult } from '../interfaces';
import { ConfigService } from '../utils/config.service';
import { ItemsService } from '../utils/items.service';
 

@Injectable()
export class DataService {

   _baseUrl: string = '';
 
    constructor(private http: Http,
        private itemsService : ItemsService,
        private configService: ConfigService) {
        this._baseUrl = configService.getApiURI();
    }

getSkills(offset?: number, itemsPerPage?: number): Observable<PaginatedResult<ISkill[]>> {
        var peginatedResult: PaginatedResult<ISkill[]> = new PaginatedResult<ISkill[]>();
 
        let headers = new Headers();
        if (offset != null && itemsPerPage != null) {
            headers.append('Pagination', offset + ',' + itemsPerPage);
        }
 
        return this.http.get(this._baseUrl + 'skills', {
            headers: headers
        })
            .map((res: Response) => {
                peginatedResult.result = res.json();
 
                if (res.headers.get("Pagination") != null) {
                    //var pagination = JSON.parse(res.headers.get("Pagination"));
                    var paginationHeader: Pagination = this.itemsService.getSerialized<Pagination>(JSON.parse(res.headers.get("Pagination")));
                    console.log(paginationHeader);
                    peginatedResult.pagination = paginationHeader;
                }
                return peginatedResult;
            })
            .catch(this.handleError);
    }

getJobs(offset?: number, itemsPerPage?: number): Observable<PaginatedResult<IJob[]>> {
        var paginatedResult: PaginatedResult<IJob[]> = new PaginatedResult<IJob[]>();
 
        let headers = new Headers();
        if (offset != null && itemsPerPage != null) {
            headers.append('Pagination', offset + ',' + itemsPerPage);
        }
 
        return this.http.get(this._baseUrl + 'jobs', {
            headers: headers
        })
            .map((res: Response) => {
                paginatedResult.result = res.json();
                if (res.headers.get("Pagination") != null) {
                    //var pagination = JSON.parse(res.headers.get("Pagination"));
                    var paginationHeader: Pagination = this.itemsService.getSerialized<Pagination>(JSON.parse(res.headers.get("Pagination")));
                    
                    paginatedResult.pagination = paginationHeader;
                }
                return paginatedResult;
            })
            .catch(this.handleError);
    }

handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';
 
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
 
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
 
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
}
