import { Component } from '@angular/core';
import { Adminedit } from '../adminedit';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EditproductService } from '../editproduct.service';

@Component({
  selector: 'app-edittreadmill',
  templateUrl: './edittreadmill.component.html',
  styleUrls: ['./edittreadmill.component.css']
})
export class EdittreadmillComponent {
  dataId: any;

  public product: Adminedit = {} as Adminedit;

  constructor(private service: EditproductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.dataId = param['get']('id')
    })

    this.service.edittreadmill(this.dataId).subscribe((data: any) => {
      this.product = data;
      console.log(this.product)
    })
  }

  update() {
    this.service.updatetreadmill(this.product, this.dataId).subscribe((data: any) => {
      this.router.navigateByUrl('/admin');
    })
  }
}
