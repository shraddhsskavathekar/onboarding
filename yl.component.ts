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
    this.router.navigate(['basic-detail'])
  }
  next(){
    this.router.navigate(['medical-and-background'])
  }
  
  save(){
    this.router.navigate(['yl'])
  }
  cancel(){
    this.router.navigate(['basic-detail'])
  }
}
