import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private userservice:UserService, private route:Router, private fb:FormBuilder, private http:HttpClient){
  }


  addproduct=this.fb.group({
    category:["",Validators.required],
    title:["",Validators.required],
    description:["",Validators.required],
    price:["",Validators.required],
    discountprice:["",Validators.required],
    rating:["",Validators.required],
    image:["",Validators.required],
    th1:["",Validators.required],
    th2:["",Validators.required],
    th3:["",Validators.required],
    th4:["",Validators.required],
    td1:["",Validators.required],
    td2:["",Validators.required],
    td3:["",Validators.required],
    td4:["",Validators.required],
  });

  submitForm(){

    if(this.addproduct.value.category === "Gymequipment"){
      this.http.post<any>(environment.gymequipmentUrl, this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }
    else if(this.addproduct.value.category === "Treadmill"){
      this.http.post<any>(environment.treadmillUrl, this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }
    else if(this.addproduct.value.category === "Armexercise"){
      this.http.post<any>(environment.armexerciseUrl, this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }
    else if(this.addproduct.value.category === "Shoulder"){
      this.http.post<any>(environment.shoulderUrl, this.addproduct.value).subscribe((data) => {
        alert("Product added successfully");
        this.route.navigateByUrl('/admin');
      });
    }

  }

}
