import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeforeJoiningComponent } from './Components/before-joining/before-joining.component';
import { AfterJoiningComponent } from './Components/after-joining/after-joining.component';
import { BasicDetailComponent } from './Components/basic-detail/basic-detail.component';
import { UploadDocumentComponent } from './Components/upload-document/upload-document.component';
import { YLComponent } from './Components/yl/yl.component';
import { ExpComponent } from './Components/exp/exp.component';
import { ITComponent } from './Components/it/it.component';
import { MedicalAndBackgroundComponent } from './Components/medical-and-background/medical-and-background.component';
import { TransportationComponent } from './Components/transportation/transportation.component';
import { AccomodationComponent } from './Components/accomodation/accomodation.component';
import { FirstDayInstructionComponent } from './Components/first-day-instruction/first-day-instruction.component';
import { SalaryAccountComponent } from './Components/salary-account/salary-account.component';
import { BiometricComponent } from './Components/biometric/biometric.component';
import { MedicalInsuranceComponent } from './Components/medical-insurance/medical-insurance.component';
import { TrainingOverviewComponent } from './Components/training-overview/training-overview.component';
import { Complete1Component } from './Components/complete1/complete1.component';
import { HeaderComponent } from './header/header.component';








@NgModule({
  declarations: [
    AppComponent,
    BeforeJoiningComponent,
    AfterJoiningComponent,
    BasicDetailComponent,
    UploadDocumentComponent,
    YLComponent,
    ExpComponent,
    ITComponent,
    MedicalAndBackgroundComponent,
    TransportationComponent,
    AccomodationComponent,
    FirstDayInstructionComponent,
    SalaryAccountComponent,
    BiometricComponent,
    MedicalInsuranceComponent,
    TrainingOverviewComponent,
    Complete1Component,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
