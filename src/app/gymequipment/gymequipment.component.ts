import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gymequipment',
  templateUrl: './gymequipment.component.html',
  styleUrls: ['./gymequipment.component.css']
})
export class GymequipmentComponent {

  productList:any="";
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.gymequipment().subscribe(data=>{
      this.productList=data;
    })
  }
}
