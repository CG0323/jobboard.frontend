import { Component, OnInit } from '@angular/core';
import { ISkill, PaginatedResult} from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { LazyLoadEvent,Message} from 'primeng/primeng';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
})
export class SkillComponent implements OnInit {
  skills: ISkill[];
  selectedSkill : ISkill;
  totalItems : number;
  pageSize : number;
  displayDialog: boolean;
  newSkill: boolean;
  msgs: Message[] = [];
  skill = new EmptySkill();
  constructor(private dataService : DataService) {}

  ngOnInit() {
    this.pageSize = 200;
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
                
            });
    }

    updateSkill(skill:ISkill) {
        this.dataService.updateSkill(skill)
            .subscribe((status: number) => {
                this.msgs.push({severity:'success', summary:'Server Confirmation', detail:'Skill updated successfully:' + skill.name});
            },
            error => {
                //this.loadingBarService.complete();
                 this.msgs.push({severity:'error', summary:'Server Error', detail:'Skill updating failed:' + error});
            });
    }

   addSkill(skill:ISkill) {
        this.dataService.addSkill(skill)
            .subscribe((returnedSkill: ISkill) => {  
                this.msgs.push({severity:'success', summary:'Server Confirmation', detail:'Skill added successfully:' + returnedSkill.name});
                this.skills.push(returnedSkill);
            },
            error => {
                //this.loadingBarService.complete();
                 this.msgs.push({severity:'error', summary:'Server Error', detail:'Skill adding failed:' + error});
                 return null;
            });
    }



    deleteSkill(skill:ISkill) {
        this.dataService.deleteSkill(skill)
            .subscribe((status: number) => {
                this.msgs.push({severity:'success', summary:'Server Confirmation', detail:'Skill deleted successfully:' + skill.name});
                this.skills.splice(this.findSelectedSkillIndex(), 1);
            },
            error => {
                //this.loadingBarService.complete();
                 this.msgs.push({severity:'error', summary:'Server Error', detail:'Skill deleting failed:' + error});
            });
    }

   loadSkillsLazy(event: LazyLoadEvent) {
        this.loadSkills(event.first, event.rows);
    }

    onRowSelect(event) {
        this.newSkill = false;
        this.skill = this.cloneSkill(event.data);
        this.displayDialog = true;
    }

    cloneSkill(s: ISkill): ISkill {
        let skill = new EmptySkill();
        for(let prop in s) {
            skill[prop] = s[prop];
        }
        return skill;
    }

    findSelectedSkillIndex(): number {
        return this.skills.indexOf(this.selectedSkill);
    }

    save() {
        if(this.newSkill){
            this.addSkill(this.skill);
        }
        else{
            this.skills[this.findSelectedSkillIndex()] = this.skill;
            this.updateSkill(this.skill);
        }
            
        
        this.skill = null;
        this.displayDialog = false;
    }
    
    delete() {
        this.deleteSkill(this.selectedSkill);
        this.skill = null;
        this.displayDialog = false;
    }    

     showDialogToAdd() {
        this.newSkill = true;
        this.skill = new EmptySkill();
        this.displayDialog = true;
    }

}

class EmptySkill implements ISkill {
    constructor(public isReg?, public id?, public name?, public keyWords?) {}
}