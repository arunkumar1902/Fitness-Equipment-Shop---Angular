import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{
  showDiv1: boolean = true;
  showDiv2: boolean = false;
  showDiv3: boolean = false;
  productdetails: any;
  totalAmount: number = 0;
  purchaseProducts:any;
  userId=this.userservice.getdetails()["id"];
  products: any;

  loading: boolean = false; // Variable to control the loading state

  constructor(
    private fb:FormBuilder,
    private service:UserService,
    private userservice:ServiceService,
    private http:HttpClient,
    private router:Router
    ){}

  ngOnInit() {
    this.service.cartproducts().subscribe(data=>{
      this.productdetails=data;
      this.calculateTotalAmount();
      this.buy();
    });
  }


  // validation
  addressform=this.fb.group({
    name:["",[Validators.required,Validators.pattern("([a-zA-Z ]{2,20})")]],
    email:["",[Validators.required,Validators.pattern("^([a-z0-9-_\.]+)@([a-z0-9]+).([a-z]{2,10})(\.[a-z]{2,8})?$")]],
    phone:["",[Validators.required,Validators.pattern("([6-9])([0-9]{9,9})")]],
    address:["",[Validators.required]],
    state:["",[Validators.required]],
    city:["",[Validators.required]],
    pincode:["",[Validators.required,Validators.pattern("([0-9]{6,6})")]],
  });

  paymentform=this.fb.group({
    nameOnCard:["",[Validators.required,Validators.pattern("([a-zA-Z ]{2,20})")]],
    cardNumber:["",[Validators.required,Validators.pattern("([0-9]{16,16})")]],
    cvv:["",[Validators.required,Validators.pattern("([0-9]{3,4})")]],
    expiryDate:["",[Validators.required]],
  });


  calculateTotalAmount() {
    this.totalAmount = 0;
    for (let item of this.productdetails) {
      if (item.userid == this.userId) {
        this.totalAmount += item.discountprice*item.quantity;
      }
    }
  }

  addressformsubmit() {
    this.showDiv2 = true;
    this.showDiv1 = false;
  }

  confirmorder() {
    this.showDiv3 = true;
    this.showDiv2 = false;
  }


  cancelorder(){
    alert("Your Order has been Cancelled");
    location.replace("home");
  }

  buy(){
    this.products=[];
    for (let item of this.productdetails) {
      if (item.userid == this.userId) {
        this.products.push({
          productDescription:item.description,
          productPrice:item.discountprice,
          quantity:item.quantity
        });
      }
    }
  }

  paymentsubmit(){

    this.loading = true; // Set loading to true when payment is initiated

    const paymentdetails={
      userid:this.userId,
      totalamount:this.totalAmount,
      address:this.addressform.value,
      payment:this.paymentform.value,
      products:this.products,
    }

    this.http.post<any>(environment.buyUrl, paymentdetails).subscribe((data) => {
      setTimeout(() => {
        alert("Payment successfull");
      this.router.navigateByUrl('/login');

      }, 5000);

    });

  }
}
