import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private httpObj:HttpClient, private route: ActivatedRoute, private router: Router) { }

    public customerName:string  = "";
	  public contactNumber:string  = "";
	  public email:string  = "";
    public address1:string  = "";
    public address2:string  = "";
    public city:string  = "";
    public district:string  = "";
    public state:string  = "";
    public pin:number ;
	  public grandTotal:number  = 0;

  ngOnInit() {
    this.grandTotal = parseInt(sessionStorage.getItem("grandTotal"));
  }

  
  // Confirm Order button click event and redirect to complete component
  public confirmOrder()
{ 
	var obj:any = {};	
	obj.customerName  = this.customerName;
	obj.contactNumber  = this.contactNumber;
	obj.email  = this.email;
  obj.address1  = this.address1;
  obj.address2  = this.address2;
  obj.city  = this.city;
  obj.district  = this.district;
  obj.state  = this.state;
  obj.pin  = this.pin;
	obj.grandTotal  = this.grandTotal;
	obj.cartId  =  sessionStorage.getItem("cartId");
	
	var url:string   = "http://localhost:3000/orders";
	
	this.httpObj.post(url, obj).subscribe(  (response:any)  =>
{
     console.log(response.id);
    sessionStorage.setItem("orderId",  response.id);
    this.router.navigate(["/complete"]);    
}	);

}

}
