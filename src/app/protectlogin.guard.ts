import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectloginGuard implements CanActivate {

  constructor(private router:Router,private loginservice:ServiceService){

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):  boolean {

    if(this.loginservice.islogin()){
      this.router.navigate([''],{replaceUrl:true});
      return false;
    }
    return true;
  }

}
