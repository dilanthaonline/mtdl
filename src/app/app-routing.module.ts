import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyLessonsComponent } from './my-lessons/my-lessons.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { QuestionaireFormEditComponent } from './questionaire-form-edit/questionaire-form-edit.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MtdlLayoutComponent } from './mtdl-layout/mtdl-layout.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserProfileComponent },
  {
    path: '',
    component: MtdlLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'myDashboard', component: DashboardComponent },
      { path: 'myLessons', component: MyLessonsComponent },
      { path: 'myQuestionnaires', component: QuestionnairesComponent },
      { path: 'questionnaireForm', component: QuestionnaireFormComponent },
      { path: 'questionnaireFormEdit', component: QuestionaireFormEditComponent },
      { path: 'assignment', component: AssignmentsComponent },
      { path: 'userProfile', component: UserProfileComponent }
    ]
  },
  {
    path: '',
    redirectTo: 'myDashboard',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'myDashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
