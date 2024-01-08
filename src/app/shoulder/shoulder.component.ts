import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shoulder',
  templateUrl: './shoulder.component.html',
  styleUrls: ['./shoulder.component.css']
})
export class ShoulderComponent {
  productList:any="";
  constructor(private service:UserService) { }

  ngOnInit() {
    this.service.shoulder().subscribe(data=>{
      this.productList=data;
    })
  }
}
