import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public uid:string   = "";
  public pwd:string   = "";
  public result:string   = "";

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  public  logIn():void
  {
      var str:string  = this.route.snapshot.queryParams["returnUrl"];
      
      if(str ==  null)
      {
        str  = "/";
      }

      if (this.uid == "admin" && this.pwd == "admin123")
      {
        localStorage.setItem("AUTH_TOKEN", this.uid);
        this.router.navigate([str]);
      }
      else
      {
        this.result = "Invalid user id or password";
      }

  }

}
