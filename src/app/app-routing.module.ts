import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AfterMyLandComponent } from './after-my-land/after-my-land.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { MylandComponent } from './myland/myland.component';
import { ChartComponent } from './chart/chart.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ExpectedCultivationComponent } from './expected-cultivation/expected-cultivation.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'myland', component: MylandComponent},
  {path: 'buyerProfile', component: BuyerProfileComponent},
  { path: 'myland/chart', component: ChartComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'expected_cultivation', component:ExpectedCultivationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
