import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-detail',
  templateUrl: './basic-detail.component.html',
  styleUrls: ['./basic-detail.component.css']
})
export class BasicDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  proceed(){
    this.router.navigate(['upload-document'])
  }
  save(){
    this.router.navigate([''])
  }
  cancel(){
    this.router.navigate([''])
  }
}
