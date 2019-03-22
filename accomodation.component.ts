import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  constructor(private router: Router) { }
  name:any;
  subpl:any;
  width:any;
    ngOnInit() {
     
      this.width=100;
  }
  back(){
    this.router.navigate(['transportation'])
  }
  next(){
    this.router.navigate(['first-day-instruction'])
  }
  
  save(){
    this.router.navigate(['accomodation'])
  }
  cancel(){
    this.router.navigate(['before-joining'])
  }
  home(){
    this.router.navigate(['before-joining'])
  }
  log(){
    this.router.navigate([''])
  }
}
