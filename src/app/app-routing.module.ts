import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyLessonsComponent } from './my-lessons/my-lessons.component';
import { QuestionaireFormComponent } from './questionaire-form/questionaire-form.component';
import { QuestionaireFormEditComponent } from './questionaire-form-edit/questionaire-form-edit.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MtdlLayoutComponent } from './mtdl-layout/mtdl-layout.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: UserProfileComponent },
  {
    path: '',
    component: MtdlLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'MyDashboard', component: DashboardComponent },
      { path: 'MyLessons', component: MyLessonsComponent },
      { path: 'MyQuestionnaires', component: QuestionnairesComponent },
      { path: 'QuestionnaireForm', component: QuestionaireFormComponent },
      { path: 'QuestionnaireFormEdit', component: QuestionaireFormEditComponent },
      { path: 'Assignment', component: AssignmentsComponent },
      { path: 'UserProfile', component: UserProfileComponent }
    ]
  },
  {
    path: '',
    redirectTo: 'MyDashboard',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'MyDashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
