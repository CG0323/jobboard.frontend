import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2Webstorage} from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { SkillComponent } from './skill/skill.component';
import { ButtonModule,DataTableModule,GrowlModule,DialogModule,CheckboxModule,SharedModule,ChartModule } from 'primeng/primeng';
import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { InsightComponent } from './insight/insight.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    InsightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule,
    CheckboxModule,
    SharedModule,
    DialogModule,
    GrowlModule,
    ButtonModule,
    ChartModule,
    Ng2Webstorage,
  ],
  providers: [
    ConfigService,
    DataService,
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
