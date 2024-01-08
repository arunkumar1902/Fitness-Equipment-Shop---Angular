import { Component } from '@angular/core';
import { Adminedit } from '../adminedit';
import { EditproductService } from '../editproduct.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editgymequipment',
  templateUrl: './editgymequipment.component.html',
  styleUrls: ['./editgymequipment.component.css']
})
export class EditgymequipmentComponent {
  dataId: any;

  public product: Adminedit = {} as Adminedit;

  constructor(private service: EditproductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.dataId = param['get']('id')
    })

    this.service.editgymequipment(this.dataId).subscribe((data: any) => {
      this.product = data;
      console.log(this.product)
    })
  }

  update() {
    this.service.updategymequipment(this.product, this.dataId).subscribe((data: any) => {
      this.router.navigateByUrl('/admin');
    })
  }
}
