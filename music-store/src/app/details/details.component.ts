import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private httpObj:HttpClient, private route: ActivatedRoute, private router: Router) { }

  public albumObj:any = {};
	public qty:number  = 1;

  ngOnInit() {

      //   get id from route
      var  id  =   this.route.snapshot.params["id"];

      //   get album details from database and store in albumObj
      let url:string  = "http://localhost:3000/albums/" + id;

      this.httpObj.get(url).subscribe( (response:any) => 
      { 
        this.albumObj = response;
      } );
  }


  // Add Cart button click
  addCart(){
	var str:string = sessionStorage.getItem("cartId");

      if(str == null)
      {
        str  = Guid.create().toString();
        sessionStorage.setItem("cartId", str);
      }

      var obj:any = {};
      obj.cartId  = str;
      obj.albumId  = this.albumObj.id;
      obj.title  = this.albumObj.title;
      obj.price  =  this.albumObj.price  ;
      obj.qty  = this.qty;
      obj.total  = obj.price * obj.qty;

      let url:string  = "http://localhost:3000/cart";

      this.httpObj.post(url, obj).subscribe( (response:any) => 
      { 
         this.router.navigate(["/cart"]);
      } );
  }

}
