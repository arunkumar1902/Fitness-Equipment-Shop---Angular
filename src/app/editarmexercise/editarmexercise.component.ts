import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EditproductService } from '../editproduct.service';
import { Adminedit } from '../adminedit';

@Component({
  selector: 'app-editarmexercise',
  templateUrl: './editarmexercise.component.html',
  styleUrls: ['./editarmexercise.component.css']
})
export class EditarmexerciseComponent implements OnInit{
  dataId: any;

  public product: Adminedit = {} as Adminedit;

  constructor(private service: EditproductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.dataId = param['get']('id')
    })

    this.service.editarmexercise(this.dataId).subscribe((data: any) => {
      this.product = data;
      console.log(this.product)
    })
  }

  update() {
    this.service.updatearmexercise(this.product, this.dataId).subscribe((data: any) => {
      this.router.navigateByUrl('/admin');
    })
  }

}
