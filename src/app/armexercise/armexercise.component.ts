import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-armexercise',
  templateUrl: './armexercise.component.html',
  styleUrls: ['./armexercise.component.css']
})
export class ArmexerciseComponent {

  productList:any="";

  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.armexercise().subscribe(data=>{
      this.productList=data;
    })
  }

}
