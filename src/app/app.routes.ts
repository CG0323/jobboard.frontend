import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillComponent} from './skill/skill.component';
 
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'skills', component: SkillComponent}
];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);