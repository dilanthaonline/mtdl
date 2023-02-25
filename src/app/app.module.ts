import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MtdlLayoutComponent } from './mtdl-layout/mtdl-layout.component';
import { MtdlMenuComponent } from './mtdl-menu/mtdl-menu.component';
import { MyLessonsComponent } from './my-lessons/my-lessons.component';
import { QuestionnaireFormEditComponent } from './questionnaire-form-edit/questionnaire-form-edit.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoadingComponent } from './loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MtdlMenuComponent,
    MyLessonsComponent,
    QuestionnairesComponent,
    DashboardComponent,
    LoginComponent,
    TopNavBarComponent,
    QuestionnaireFormComponent,
    QuestionnaireFormEditComponent,
    AssignmentsComponent,
    UserProfileComponent,
    MtdlLayoutComponent,
    LoadingComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    MatStepperModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
