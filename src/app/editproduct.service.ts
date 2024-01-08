import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adminedit } from './adminedit';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditproductService {

  constructor(private http:HttpClient) { }

  // Armexercise
  editarmexercise(id: any){
    return this.http.get(environment.armexerciseUrl +id);
  }

  updatearmexercise(product: Adminedit, id: any){
    return this.http.put(environment.armexerciseUrl + id, product);
  }


  // Gymequipment
  editgymequipment(id: any){
    return this.http.get(environment.gymequipmentUrl+id);
  }

  updategymequipment(product: Adminedit, id: any){
    return this.http.put(environment.gymequipmentUrl + id, product);
  }


  // shoulder
  editshoulder(id: any){
    return this.http.get(environment.shoulderUrl+id);
  }

  updateshoulder(product: Adminedit, id: any){
    return this.http.put(environment.shoulderUrl + id, product);
  }


  // treadmill
  edittreadmill(id: any){
    return this.http.get(environment.treadmillUrl +id);
  }

  updatetreadmill(product: Adminedit, id: any){
    return this.http.put(environment.treadmillUrl + id, product);
  }

}
