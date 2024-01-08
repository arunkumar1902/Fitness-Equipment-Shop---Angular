import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validator';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder, private router:Router, private http:HttpClient){
  }

// validation
  registerForm=this.fb.group({
    name:["",[Validators.required,Validators.pattern("([a-zA-Z ]{2,20})")]],
    email:["",[Validators.required,Validators.pattern("^([a-z0-9-_\.]+)@([a-z0-9]+).([a-z]{2,10})(\.[a-z]{2,8})?$")]],
    phone:["",[Validators.required,Validators.pattern("([6-9])([0-9]{9,9})")]],
    address:["",[Validators.required]],
    password:["",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]],
    cpassword:["",[Validators.required]],
  },
  {
    validator:ConfirmedValidator('password','cpassword')
  });



  submitForm(){
    this.http.get<any>(environment.usersUrl).subscribe(res=>{
      const user=res.find((result:any)=>{
        return result.email === this.registerForm.value.email;
      });
      if(user){
        alert("Email already exists");
      }
      else{
        var values = this.registerForm.value;
        Object.assign(values,{"role":"user"});
        Object.assign(values,{"paymentaddress":[]});
        this.http.post<any>(environment.usersUrl, values).subscribe((data) => {
          alert("Registered Successfully, Now Login please");
          this.router.navigateByUrl('/login');
        });
      }
    });


  }


}

