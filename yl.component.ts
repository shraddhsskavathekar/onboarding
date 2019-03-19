import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-yl',
  templateUrl: './yl.component.html',
  styleUrls: ['./yl.component.css']
})
export class YLComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['upload-document'])
  }
  next(){
    this.router.navigate(['medical-and-background'])
  }
  
  save(){
    this.router.navigate(['yl'])
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
