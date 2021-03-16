import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems:any[]   = [];
	public grandTotal:any  =  0;

  constructor(private httpObj:HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCartItems();
  }
  

  // Getting cart items from server
  public  getCartItems():void
{
	var str:string = sessionStorage.getItem("cartId");
	
	var url   =  "http://localhost:3000/cart?cartId=" + str;
	
	this.httpObj.get(url).subscribe(  (response:any[] ) => 
	{
			this.cartItems  = response;
			this.getGrandTotal();
	});	
}	

//Get grond total
public getGrandTotal():void
{
		this.grandTotal = 0;
		
		for(var i in  this.cartItems)
		{
				this.grandTotal  +=   this.cartItems[i].total;
		}
}	


//Removing item from cart
public  removeItem( id:number ):void
{
	var url   =  "http://localhost:3000/cart/" +  id;
	this.httpObj.delete(url).subscribe(function()
	{
		this.getCartItems();
	});
}

//Checkout page redirection
public checkOut():void
{
		sessionStorage.setItem("grandTotal", this.grandTotal);
		this.router.navigate(["/checkout"]);		
}

}
