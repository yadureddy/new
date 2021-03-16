import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor() { }

  public orderId:number  = 0;

  ngOnInit() {
    this.orderId = parseInt(sessionStorage.getItem("orderId"));
  }

}
