import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logto',
  templateUrl: './logto.component.html',
  styleUrls: ['./logto.component.css']
})
export class LogtoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  reside(ref1,ref2){
    //alert(ref1+'==='+ref2);
    if(ref1 == '' || ref2 == ''){
      alert("Please enter username and password");
      return false;
    }else {
      this.router.navigate(['before-joining']);
      location.reload();
    }
}
}