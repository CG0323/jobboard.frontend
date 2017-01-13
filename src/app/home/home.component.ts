import { Component, OnInit } from '@angular/core';
import { IJob,ISkill, PaginatedResult} from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { LazyLoadEvent} from 'primeng/primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  selectedSkills: string[] = [];
  skills: ISkill[];
  jobs: IJob[];
  totalItems : number;
  pageSize : number;
  detail: string;
  displayDialog: boolean;
  constructor(private dataService : DataService) {}

  ngOnInit() {
    this.pageSize = 15;
    this.loadJobs(0, this.pageSize);
    this.loadSkills(0,10000);
  }
  
  loadJobs(offset: number, pageSize: number) {
        this.dataService.getJobs(offset, pageSize)
            .subscribe((res: PaginatedResult<IJob[]>) => {
                this.jobs = res.result;
                this.totalItems = res.pagination.TotalItems;
            },
            error => {
                //this.loadingBarService.complete();
                // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });
    }

  loadSkills(offset: number, pageSize: number) {
        this.dataService.getSkills(offset, pageSize)
            .subscribe((res: PaginatedResult<ISkill[]>) => {
                this.skills = res.result;
                this.totalItems = res.pagination.TotalItems;
            },
            error => {
                //this.loadingBarService.complete();
                // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });
    }
    loadJobsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        
        //imitate db connection over a network
        this.loadJobs(event.first, event.rows);
    }

    getPostDate(i: number){
        var magic:number = 15;
        i = i % magic
        if(this.jobs.length <= i){

            return "";
        }
        var postDate = new Date(this.jobs[i].postAt);
        return postDate.toLocaleDateString();
    }


    getUrl(i: number){
        var magic:number = 15;
        i = i % magic
        if(this.jobs.length <= i){
            return "";
        }
        return this.jobs[i].url;
    }

    getTitle(i: number){
        var magic:number = 15;
        i = i % magic
        if(this.jobs.length <= i){
            return "";
        }        
        return this.jobs[i].title;
    }

    hasSkill(i:number, skillId:number){
        var magic:number = 15;
        i = i % magic
        if(this.jobs.length <= i){
            return false;
        }
        var job:IJob = this.jobs[i];
        var index = job.skills.indexOf(skillId)
        if(index >= 0){
            return true;
        }
        else{
            return false;
        }
    }

    showDetail(i: number) {
        var magic:number = 15;
        i = i % magic;

        this.dataService.getJobWithContent(i)
            .subscribe((res: IJob) => {
                this.detail = res.content;
                this.displayDialog = true;
            },
            error => {
                //this.loadingBarService.complete();
                // this.notificationService.printErrorMessage('Failed to load schedules. ' + error);
            });
    }

    close() {
        this.detail = null;
        this.displayDialog = false;
    }    

}
