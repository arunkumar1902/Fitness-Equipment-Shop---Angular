import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-treadmill',
  templateUrl: './treadmill.component.html',
  styleUrls: ['./treadmill.component.css']
})
export class TreadmillComponent {

  productList:any="";
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.treadmill().subscribe(data=>{
      this.productList=data;
    })
  }

}
