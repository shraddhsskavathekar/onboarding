import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BT-onboarding';
  constructor(private router: Router) { }

  home(){
    this.router.navigate([''])
  }
  log(){
    this.router.navigate(['logto'])
  }
  proces(){
    this.router.navigate(['logto'])
  }
  
  
}
