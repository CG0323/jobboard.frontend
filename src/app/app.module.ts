import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { SkillComponent } from './skill/skill.component';
import { DataTableModule,CheckboxModule,SharedModule } from 'primeng/primeng';
import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule,
    SharedModule
  ],
  providers: [
    ConfigService,
    DataService,
    ItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
