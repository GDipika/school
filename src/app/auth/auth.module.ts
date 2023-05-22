import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms'
const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  
]

@NgModule({
  declarations: [
    RegistrationComponent,LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),ReactiveFormsModule
  ]
})
export class AuthModule { }
