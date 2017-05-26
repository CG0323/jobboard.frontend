import { Component, OnInit } from '@angular/core';
import { IJob, ISkill, PaginatedResult} from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
})
export class JobComponent implements OnInit {
  selectedSkills: ISkill[] = [];
  skills: ISkill[];
  jobs: IJob[];
  totalItems : number;
  pageSize : number;
  job: IJob;
  displayDialog: boolean;
  constructor(private dataService : DataService, private storage:LocalStorageService) {}

  ngOnInit() {
    this.pageSize = 25;
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

            });
    }

  loadSkills(offset: number, pageSize: number) {
        this.dataService.getSkills(offset, pageSize)
            .subscribe((res: PaginatedResult<ISkill[]>) => {
                this.skills = res.result;
                this.selectedSkills.push(this.skills.find(s=>s.name==="SQL"));
                this.selectedSkills.push(this.skills.find(s=>s.name===".NET"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="JS"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="Git"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="Linux"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="Angularjs"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="Angular2"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="Nodejs"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="MongoDB"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="HTML"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="CSS"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="Python"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="Java"));
                this.selectedSkills.push(this.skills.find(s=>s.name==="PHP"));
            });
    }

 loadJobsLazy(event: LazyLoadEvent) {
        this.loadJobs(event.first, event.rows);
    }

    getPostDate(i: number){
        var magic:number = this.pageSize;
        i = i % magic
        if(this.jobs.length <= i){

            return "";
        }
        var postDate = new Date(this.jobs[i].postAt);
        return postDate.toLocaleDateString();
    }


    getUrl(i: number){
        var magic:number = this.pageSize;
        i = i % magic
        if(this.jobs.length <= i){
            return "";
        }
        return this.jobs[i].url;
    }

    getTitle(i: number){
        var magic:number = this.pageSize;
        i = i % magic
        if(this.jobs.length <= i){
            return "";
        }        
        return this.jobs[i].title;
    }

    getRequriedSkillLevel(i:number, skillId:number){
        var magic:number = this.pageSize;
        i = i % magic
        if(this.jobs.length <= i){
            return 0;
        }
        var job:IJob = this.jobs[i];
        for(var j = 0; j < job.skills.length; j++){
            if(job.skills[j].skillId == skillId){
                return job.skills[j].level;
            }
        }
        return 0;
    }


    showDetail(i: number) {
        var magic:number = this.pageSize;
        i = i % magic;
        var id = this.jobs[i].id;
        this.dataService.getJobWithContent(id)
            .subscribe((res: IJob) => {
                this.job = res;
                this.displayDialog = true;
            },
            error => {

            });
    }

    close() {
        this.job = null;
        this.displayDialog = false;
    }    

    saveSetting(){
         this.storage.store('selectedSkills', this.selectedSkills);
    }


    

}
