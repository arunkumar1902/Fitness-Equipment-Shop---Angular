import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmexerciseComponent } from './armexercise/armexercise.component';
import { AuthGuard } from './auth.guard';
import { BuyComponent } from './buy/buy.component';
import { GymequipmentComponent } from './gymequipment/gymequipment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { TreadmillComponent } from './treadmill/treadmill.component';
import { ProductdetailedComponent } from './productdetailed/productdetailed.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminGuard } from './admin.guard';
import { ProtectloginGuard } from './protectlogin.guard';
import { CartComponent } from './cart/cart.component';
import { EditarmexerciseComponent } from './editarmexercise/editarmexercise.component';
import { EditgymequipmentComponent } from './editgymequipment/editgymequipment.component';
import { EditshoulderComponent } from './editshoulder/editshoulder.component';
import { EdittreadmillComponent } from './edittreadmill/edittreadmill.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'editarmexercise/:id',
    component:EditarmexerciseComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'editgymequipment/:id',
    component:EditgymequipmentComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'editshoulder/:id',
    component:EditshoulderComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'edittreadmill/:id',
    component:EdittreadmillComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'addproduct',
    component:AddproductComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[ProtectloginGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[ProtectloginGuard]
  },
  {
    path:'product/:check',
    component:ProductdetailedComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'buy',
    component:BuyComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'gymequipment',
    component:GymequipmentComponent
  },
  {
    path:'treadmill',
    component:TreadmillComponent
  },
  {
    path:'armexercise',
    component:ArmexerciseComponent
  },
  {
    path:'shoulder',
    component:ShoulderComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
