import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EditproductService } from '../editproduct.service';
import { Adminedit } from '../adminedit';

@Component({
  selector: 'app-editshoulder',
  templateUrl: './editshoulder.component.html',
  styleUrls: ['./editshoulder.component.css']
})
export class EditshoulderComponent {
  dataId: any;

  public product: Adminedit = {} as Adminedit;

  constructor(private service: EditproductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.dataId = param['get']('id')
    })

    this.service.editshoulder(this.dataId).subscribe((data: any) => {
      this.product = data;
      console.log(this.product)
    })
  }

  update() {
    this.service.updateshoulder(this.product, this.dataId).subscribe((data: any) => {
      this.router.navigateByUrl('/admin');
    })
  }
}
