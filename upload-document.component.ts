import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  young(){
    this.router.navigate(['yl'])
  }
  experi(){
    this.router.navigate(['exp'])
  }
  internal(){
    this.router.navigate(['it'])
  }
  back(){
    this.router.navigate(['basic-detail'])
  }
  
  save(){
    this.router.navigate(['upload-document'])
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
