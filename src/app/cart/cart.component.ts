import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { ServiceService } from '../service.service';
import { environment } from 'src/assets/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private client: UserService, private service:ServiceService, private http:HttpClient) {}

  cartproducts:any;
  userId=this.service.getdetails()["id"];
  totalAmount: number = 0;
  isCartEmpty: boolean = true; // Variable to track cart emptiness

  ngOnInit(){

    // get products in addtocart of db.json
    this.client.cartproducts().subscribe(data=>{
      this.cartproducts=data;
      this.calculateTotalAmount();
      this.checkCartEmpty();
    });

  }


  calculateTotalAmount() {
    this.totalAmount = 0;
    for (let item of this.cartproducts) {
      if (item.userid == this.userId) {
        this.totalAmount += item.discountprice*item.quantity;
      }
    }
  }

  checkCartEmpty() {
    this.isCartEmpty = this.cartproducts.every(
      (item: any) => item.userid != this.userId
    );
  }

  incrementQuantity(item: any) {
    if (item.quantity < 5) {
      item.quantity++;
      this.updateQuantity(item.id, item.quantity); // Call the function to update quantity in the backend
      window.location.reload();
      this.calculateTotalAmount();
    }
    else {
      alert('Maximum quantity of a Product is 5');
    }
  }

  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateQuantity(item.id, item.quantity); // Call the function to update quantity
      window.location.reload();
      this.calculateTotalAmount();
    }
  }

  deletecartproducts(id:any){
    this.client.delcartproducts(id).subscribe(data=>{
      window.location.reload();
    });
  }


 updateQuantity(productId: any, quantity: number) {
  // Find the product by productId in the cartproducts array
  const productToUpdate = this.cartproducts.find((item: any) => item.id === productId);
  if (!productToUpdate) {
    console.error('Product not found in cartproducts array.');
    return;
  }
  productToUpdate.quantity = quantity; // Update the quantity of the product
  this.http.put(`${environment.addtocartUrl}${productId}`, productToUpdate).subscribe(
  );
 }

}
