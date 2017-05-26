import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { JobComponent } from './job/job.component';
import {InsightComponent} from './insight/insight.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'jobs', component: JobComponent },
    { path: 'skills', component: SkillComponent},
    { path: 'insight', component: InsightComponent}
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });