import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MylessonsComponent } from './mylessons/mylessons.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component'
import { QuestionaireformComponent } from './questionaireform/questionaireform.component'
import { QuestionaireformeditComponent } from './questionaireformedit/questionaireformedit.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { UserprofileComponent } from './userprofile/userprofile.component';




const routes: Routes = [
  {path: 'Mydashboard', component: DashboardComponent},
  {path: 'Mylessons', component: MylessonsComponent},
  {path: 'Myquestionnaires', component: QuestionnairesComponent},
  {path: 'QuestionnaireformviewComponent', component: QuestionaireformComponent},
  {path: 'QuestionnaireformeditComponent', component: QuestionaireformeditComponent},
  {path: 'AssignmentComponent', component: AssignmentsComponent},
  {path: 'UserprofileComponent', component: UserprofileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
