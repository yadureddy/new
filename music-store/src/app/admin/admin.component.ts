import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pureFunction5 } from '@angular/core/src/render3';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 
  public albums:any[];

  constructor(private httpObj:HttpClient, private router:Router, private route:ActivatedRoute)
  {    
  }
  

  // Getting data from Server
  public getData():void
  {
    let url:string  = "http://localhost:3000/albums";
    this.httpObj.get(url).subscribe( (data:any[]) => 
    {      
      this.albums = data;
    });    
  }

  //Adding Album details to server
  public t1:number ;
  public t2:string  = "";
  public t3:string  = "";
  public t4:string  = "";
  public t5:number ;

  public addData():void
  {
    let obj:any = {};
    obj.id=this.t1+1;
    obj.title=this.t2;
    obj.category=this.t3;
    obj.artist=this.t4;
    obj.price=this.t5;

    let url:string="http://localhost:3000/albums";
    this.httpObj.post(url,obj).subscribe((data:any) =>
    {
      console.log(data);
      this.getData();
    });
  }

  //Deleting Album details from server
  public deleteData(id:number):void
  {
    let url:string="http://localhost:3000/albums/"+id;
    this.httpObj.delete(url).subscribe((data:any) =>
    {
      console.log(data);
      this.getData();

    });
  }

  //Select Album details
  public selectData(id:number):void
  {

    var obj:any  = this.albums.find( x => x.id == id );
    this.t1  = obj.id;
    this.t2  = obj.title;
    this.t3  = obj.category;
    this.t4  = obj.artist;
    this.t5  = obj.price;    
  }


  //Update Album details
  public updateData(id:number):void
  {
    var obj:any = {};
    obj.id=this.t1;
    obj.title=this.t2;
    obj.category=this.t3;
    obj.artist=this.t4;
    obj.price=this.t5;

   var index:number  = this.albums.findIndex( x => x.id == this.t1 );
   this.albums[index].title = this.t2;
   this.albums[index].category = this.t3;
   this.albums[index].artist = this.t4;
   this.albums[index].price = this.t5;

   let url:string="http://localhost:3000/albums";
   this.httpObj.put(url, obj).subscribe((data:any) =>
   {
     console.log(data);
     this.getData();
   });

  }

  public logout():void {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(["/login"]);

}

}

