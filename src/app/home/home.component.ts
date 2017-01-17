import { Component, OnInit } from '@angular/core';
import { IJob, ISkill, PaginatedResult} from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
