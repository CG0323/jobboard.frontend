import { Component, OnInit } from '@angular/core';
import { ISkill, PaginatedResult} from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { LazyLoadEvent} from 'primeng/primeng';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
})
export class SkillComponent implements OnInit {
  skills: ISkill[];
  totalItems : number;
  pageSize : number;
  constructor(private dataService : DataService) {}

  ngOnInit() {
    this.pageSize = 15;
    this.loadSkills(0, this.pageSize);
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

    loadSkillsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        
        //imitate db connection over a network
        this.loadSkills(event.first, event.rows);
    }

}
