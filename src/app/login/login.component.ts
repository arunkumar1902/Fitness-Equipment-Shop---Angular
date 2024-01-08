import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  retUrl: any = 'home';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private slogin: ServiceService,
    private link: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.link.queryParamMap.subscribe((parama) => {
      this.retUrl = parama.get('retUrl');
    });
  }


  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.pattern('^([a-zA-Z0-9-_.]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})(.[a-zA-Z]{2,8})?$')]],
    password: ['',[Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$')]]
  });


  login() {
    // get user info from db.json
      this.http.get<any>(environment.usersUrl).subscribe((res) => {

        const user = res.find((result: any) => {

          if (result.email === this.loginForm.value.email) {
            return result; // return user details for the given email and store in 'user'
          }

        });

        if(user == null){
          alert("No user Found");
        }
        else if (user.password == this.loginForm.value.password) {
          alert('Login Sucessfull');
          localStorage.setItem('userdata', JSON.stringify(user)); // convert "user" data into string & store in localstorage as userdata
          this.slogin.load(user);

          // from products -> cart guard
          if (this.retUrl != null) {
            location.replace(this.retUrl);
          }
          else {
            location.replace("home");
          }
        }

        else {
          alert('Email or password is wrong');
        }
      });

  }
}
