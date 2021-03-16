import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private httpObj:HttpClient) { }

  public albums:any[] = [];
	public category:string    = "";

  ngOnInit() {
    //this.category = this.route.snapshot.params["id"];
    this.getAlbums();
  }



  //Getting Albums from Server
  public  getAlbums()
{
	var url  = "http://localhost:3000/albums";
	this.httpObj.get(url).subscribe( (response:any[])  =>
	{
		this.albums = response;
	});
}

//Sory by Popularity
public  popular()
{
	var url  = "http://localhost:3000/albums?_sort=id&_order=desc";
	
	this.httpObj.get(url).subscribe( (response:any[])  =>
	{
		this.albums = response;
	});
}

//Sory by Price Low to High
public  lowtoHigh()
{
	var url  = "http://localhost:3000/albums?_sort=price&_order=asc";
	
	this.httpObj.get(url).subscribe( (response:any[])  =>
	{
		this.albums = response;
	});
}

//Sory by Price High to Low
public  hightoLow()
{
	var url  = "http://localhost:3000/albums?_sort=price&_order=desc";
	
	this.httpObj.get(url).subscribe( (response:any[])  =>
	{
		this.albums = response;
	});
}

}
