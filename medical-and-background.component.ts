import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medical-and-background',
  templateUrl: './medical-and-background.component.html',
  styleUrls: ['./medical-and-background.component.css']
})
export class MedicalAndBackgroundComponent implements OnInit {

  constructor(private router: Router) { }
  name:any;
  subpl:any;
  width:any;
  ngOnInit() {
    this.width=60;
  }
  back(){
    this.router.navigate(['upload-document'])
  }
  next(){
    this.router.navigate(['transportation'])
  }
  
  save(){
    this.router.navigate(['medical-and-background'])
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
