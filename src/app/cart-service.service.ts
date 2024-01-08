import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient){}

  getUsers():Observable<any>{
    return this.http.get<any>(environment.usersUrl);
  }

  getProducts():Observable<any>{
    return this.http.get<any>(environment.gymequipmentUrl);
  }
}
