import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    //setTimeout(function(){
      document.getElementById('header').style.display = "none";
    //},100);
  }
  home(){
    this.router.navigate([''])
  }
  log(){
    this.router.navigate(['logto'])
  }
  
}
