import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume/resume.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: LoginComponent },
   { path: 'resume',  component: ResumeComponent,
   children: [
      { path: '', redirectTo: 'Summary', pathMatch: 'full' },
      { path: 'Summary', component: SummaryComponent },
      { path: 'Education', component: EducationComponent },
       { path: 'Skills', component: SkillsComponent },
       { path: 'Projects', component: ProjectsComponent },
       { path: 'Achievements', component: AchievementsComponent },
       { path: 'Hobbies', component: HobbiesComponent },
        { path: 'Details', component: DetailsComponent }

    ] }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}