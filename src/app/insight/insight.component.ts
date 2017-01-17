import { Component, OnInit } from '@angular/core';
import { ISkill} from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { Message,UIChart } from 'primeng/primeng';
@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {
  showPlot : boolean = false;
  options: any;
  data: any;
  top10Skills : ISkill[];
  msgs: Message[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadTop10Skills();
    this.options = {
            title: {
                display: true,
                text: '10 Hottest Skills in Canada IT Industry',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
  }

  loadTop10Skills(){
    this.dataService.getTop10Skills()
    .subscribe((skills: ISkill[])=> {
      this.top10Skills = skills;
      this.plotBarPlot()
    }, error=> {
      this.msgs.push({severity:'error', summary:'Server Error', detail:'Failed to get top 10 skills: ' + error});
    })
  }

  plotBarPlot(){
    var names : string[] = [];
    var popularities : number[] = [];
    this.top10Skills.forEach(s=> {names.push(s.name);popularities.push(s.temperature)})
    this.data = {
      labels: names,
      datasets:[{
        label: 'Skill Popularity',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: popularities
      }]
    }
  }

  update(chart: UIChart) {
    setTimeout(() => {
    chart.refresh();
    }, 100);
    this.showPlot = true;
  }

}
