import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router:Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean 
  {
       
      if(localStorage.getItem("AUTH_TOKEN") != null)
      {
        return true;
      }
      else
      { 
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });  
        return false;
      }
  }


}
