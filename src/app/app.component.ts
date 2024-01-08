import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project';

  // display Username
  public data: any;
  constructor(public slogin: ServiceService, public router: Router) {
    var values = JSON.parse(localStorage.getItem('userdata') + '');
    slogin.load(values);
  }

  //logout
  public logout() {
    if (confirm('Confirm logout')) {
      localStorage.clear();
      this.slogin.load(null);
      this.router.navigate(['home']);
    }
  }

  // profile click
  public show=true;
  public change:any;

  buttonclick(){
    if(this.show){
      this.change=true;
      this.show=false;
    }
    else{
      this.change=false;
      this.show=true;
    }
  }

  displaydiv(){
    return this.change;
  }


}
