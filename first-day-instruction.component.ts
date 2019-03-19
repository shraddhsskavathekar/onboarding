import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-day-instruction',
  templateUrl: './first-day-instruction.component.html',
  styleUrls: ['./first-day-instruction.component.css']
})
export class FirstDayInstructionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['accomodation'])
  }
  submit(){
    this.router.navigate([''])
  }
  
  save(){
    this.router.navigate(['first-day-instruction'])
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
