import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  userinfo:any="";
  newarrivals:any="";
  gymequipment:any="";
  treadmill:any="";
  armexercise:any="";
  shoulder:any="";

  constructor(private service:UserService,private router:Router){}

  ngOnInit(){

    // to get user info
    this.service.userinfo().subscribe(data=>{
      this.userinfo=data;
    });

    // to get products
    this.service.homeproduct().subscribe(data=>{
      this.newarrivals=data;
    });
    this.service.gymequipment().subscribe(data=>{
      this.gymequipment=data;
    });
    this.service.treadmill().subscribe(data=>{
      this.treadmill=data;
    });
    this.service.armexercise().subscribe(data=>{
      this.armexercise=data;
    });
    this.service.shoulder().subscribe(data=>{
      this.shoulder=data;
    });
  }


  // delete products
  deletegymequipment(id:any){
    this.service.delgymequipment(id).subscribe(data=>{
      alert("Deleted");
    });
  }
  deletetreadmill(id:any){
   this.service.deltreadmill(id).subscribe(data=>{
      alert("Deleted");
    });
  }
  deletearmexercise(id:any){
   this.service.delarmexercise(id).subscribe(data=>{
      alert("Deleted");
    });
  }
  deleteshoulder(id:any){
    this.service.delshoulder(id).subscribe(data=>{
      alert("Deleted");
    });
  }

}
