import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ITComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['basic-detail'])
  }
  next(){
    this.router.navigate(['medical-and-background'])
  }
  
  save(){
    this.router.navigate(['it'])
  }
  cancel(){
    this.router.navigate(['it'])
  }
}
