import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private httpObj:HttpClient, private route: ActivatedRoute)
  {    
  }

  public cats:string[] = [];
  public albums:any[] = [];
	public category:string    = "";

  public  ngOnInit()
{
	 this.getCategories();
   this.category = this.route.snapshot.params["id"];
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
	var url  = "http://localhost:3000/albums?category="+ this.category;
	
	this.httpObj.get(url).subscribe( (response:any[])  =>
	{
		this.albums = response;
	});
}

}
