import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpObj:HttpClient)
  {    
  }

  public cats:string[] = [];
	public albums:any[] = [];

  public  ngOnInit()
{
	 this.getCategories();
	 this.getAlbums();
}

public  getCategories()
{
	var url  = "http://localhost:3000/albums";
	
	this.httpObj.get(url).subscribe( (response:any[])  =>
	{
		var  ar:string[] = response.map(x => x.category);
		 this.cats  = Array.from(new Set(ar));
	});
}

public  getAlbums()
{
	var url  = "http://localhost:3000/albums?_sort=id&_order=desc&_limit=4";
	
	this.httpObj.get(url).subscribe( (response:any[])  =>
	{
		this.albums = response;
	});
}

}
