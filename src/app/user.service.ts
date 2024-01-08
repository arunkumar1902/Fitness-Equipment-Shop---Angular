import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private client: HttpClient) {}

  // get user info in admin page
  userinfo() {
    return this.client.get(environment.usersUrl);
  }

  // get products in admin
  homeproduct() {
    return this.client.get(environment.homeUrl);
  }

  gymequipment() {
    return this.client.get(environment.gymequipmentUrl);
  }

  treadmill() {
    return this.client.get(environment.treadmillUrl);
  }

  armexercise() {
    return this.client.get(environment.armexerciseUrl);
  }

  shoulder() {
    return this.client.get(environment.shoulderUrl);
  }

  //delete as admin

  delgymequipment(id: any) {
    return this.client.delete(environment.gymequipmentUrl + id);
  }

  deltreadmill(id: any) {
    return this.client.delete(environment.treadmillUrl + id);
  }

  delarmexercise(id: any) {
    return this.client.delete(environment.armexerciseUrl + id);
  }

  delshoulder(id: any) {
    return this.client.delete(environment.shoulderUrl + id);
  }

  // add to cart
  cartproducts() {
    return this.client.get<any>(environment.addtocartUrl);
  }
  delcartproducts(id: any) {
    return this.client.delete(environment.addtocartUrl + id);
  }


}
