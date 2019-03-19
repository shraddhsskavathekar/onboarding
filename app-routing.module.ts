import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { LogginComponent } from './Components/loggin/loggin.component';
import { LogtoComponent } from './logto/logto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'upload-document',component:UploadDocumentComponent},
  {path:'basic-detail',component:BasicDetailComponent},
  {path:'yl',component:YLComponent},
  {path:'exp',component:ExpComponent},
  {path:'it',component:ITComponent},
  {path:'medical-and-background',component:MedicalAndBackgroundComponent},
  {path:'transportation',component:TransportationComponent},
  {path:'accomodation',component:AccomodationComponent },
  {path:'first-day-instruction',component:FirstDayInstructionComponent},
  {path:'header',component:HeaderComponent},
  {path:'before-joining',component:BeforeJoiningComponent},
  {path:'loggin',component:LogginComponent},
  {path:'logto',component:LogtoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
