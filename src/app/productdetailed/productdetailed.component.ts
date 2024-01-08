import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-productdetailed',
  templateUrl: './productdetailed.component.html',
  styleUrls: ['./productdetailed.component.css'],
})
export class ProductdetailedComponent implements OnInit {
  productList: any = '';
  searchFor: any = '';
  finalProduct: any = '';

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private slogin: ServiceService
  ) {}
  ngOnInit() {
    //gymequipment
    this.service.gymequipment().subscribe((data) => {
      this.productList = data;
      this.getproduct();
    });

    //treadmill
    this.service.treadmill().subscribe((data) => {
      this.productList = data;
      this.getproduct();
    });

    //armexercise
    this.service.armexercise().subscribe((data) => {
      this.productList = data;
      this.getproduct();
    });

    //shoulder
    this.service.shoulder().subscribe((data) => {
      this.productList = data;
      this.getproduct();
    });
  }
  getproduct() {
    this.route.params.subscribe((paramdata) => {
      this.searchFor = paramdata['check'];

      for (let product of this.productList) {
        if (product.title == this.searchFor) {
          this.finalProduct = product;
          this.productList.forEach((a: any) => {
            Object.assign(a, { quantity: 1, total: a.price });
          });
          break;
        }
      }
    });
  }

  // add to cart
  userId: any;
  products: any;
  quantity: any = 1;
  result: any;

  addtocart() {
    this.userId = this.slogin.getdetails()['id'];
    this.products = {
      title:this.finalProduct.title,
      description: this.finalProduct.description,
      image: this.finalProduct.image,
      discountprice: this.finalProduct.discountprice,
      userid: this.userId,
      quantity: this.quantity,
    };

    this.cartproduct();

  }


  cartproduct(){
    this.http.get<any>(environment.addtocartUrl).subscribe(data=>{
      const items=data;

      // Check if the product is already in the cart
      const existingProduct = items.find((item: any) =>{
        return item.userid == this.products.userid && item.description == this.products.description
      });

      if (existingProduct) {
        alert('Product already added, You can increase the quantity in Cart page');
        location.replace("cart");
      }

      else{
        this.http.post<any>(environment.addtocartUrl, this.products).subscribe((data) => {
          alert('Product added to cart');
        });
      }

    });
  }
}
