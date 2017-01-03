import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillComponent} from './skill/skill.component';
import {InsightComponent} from './insight/insight.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'skills', component: SkillComponent},
    { path: 'insight', component: InsightComponent}
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);