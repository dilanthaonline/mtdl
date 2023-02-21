import { NgModule } from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core'
import {FlexLayoutModule} from "@angular/flex-layout";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MtdlmenuComponent } from './mtdlmenu/mtdlmenu.component';
import { MylessonsComponent } from './mylessons/mylessons.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { QuestionaireformComponent } from './questionaireform/questionaireform.component';
import { QuestionaireformeditComponent } from './questionaireformedit/questionaireformedit.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AssignmentsComponent } from './assignments/assignments.component';



@NgModule({
  declarations: [
    AppComponent,
    MtdlmenuComponent,
    MylessonsComponent,
    QuestionnairesComponent,
    DashboardComponent,
    LoginComponent,
    TopnavbarComponent,
    QuestionaireformComponent,
    QuestionaireformeditComponent,
    AssignmentsComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
