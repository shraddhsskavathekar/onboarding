import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-before-joining',
  templateUrl: './before-joining.component.html',
  styleUrls: ['./before-joining.component.css']
})
export class BeforeJoiningComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['basic-detail'])
  }
  home(){
    this.router.navigate(['before-joining'])
  }
  log(){
    this.router.navigate(['home'])
  }
}
