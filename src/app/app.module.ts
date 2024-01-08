import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GymequipmentComponent } from './gymequipment/gymequipment.component';
import { TreadmillComponent } from './treadmill/treadmill.component';
import { HttpClientModule } from '@angular/common/http';
import { ArmexerciseComponent } from './armexercise/armexercise.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';
import { ProductdetailedComponent } from './productdetailed/productdetailed.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditarmexerciseComponent } from './editarmexercise/editarmexercise.component';
import { EditgymequipmentComponent } from './editgymequipment/editgymequipment.component';
import { EditshoulderComponent } from './editshoulder/editshoulder.component';
import { EdittreadmillComponent } from './edittreadmill/edittreadmill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GymequipmentComponent,
    TreadmillComponent,
    ArmexerciseComponent,
    ShoulderComponent,
    CartComponent,
    BuyComponent,
    ProductdetailedComponent,
    AdminComponent,
    AddproductComponent,
    EditarmexerciseComponent,
    EditgymequipmentComponent,
    EditshoulderComponent,
    EdittreadmillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
