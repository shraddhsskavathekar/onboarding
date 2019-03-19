import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['medical-and-background'])
  }
  next(){
    this.router.navigate(['accomodation'])
  }
  
  save(){
    this.router.navigate(['transportation'])
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
