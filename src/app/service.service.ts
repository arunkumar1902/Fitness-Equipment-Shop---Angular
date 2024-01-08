import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  // login
  private login:any;

  public islogin(){

    if(this.login==null){
      return false;
    }
    return true;
  }

  public load(data:any){
    this.login = data;
  }

  public getdetails(){
    return this.login;
  }


  public isadmin(){
    if(this.login!=null){
      if(this.login.role=="admin"){
        return true;
      }
      return false;
    }
    return false;
  }

}
