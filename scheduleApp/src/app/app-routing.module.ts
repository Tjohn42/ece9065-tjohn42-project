import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HerosComponent } from './heros/heros.component';
import { SecureUserComponent } from './secure-user/secure-user.component';
import { RegisterComponent } from './register/register.component';
import { AdministratorComponent } from './administrator/administrator.component';
 
const routes: Routes = [
  { path: 'secure-user', component: SecureUserComponent, canActivate: [AuthGuard] },
  { path: 'administrator', component: AdministratorComponent, canActivate: [AuthGuard] },
  { path: 'registerUser', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
