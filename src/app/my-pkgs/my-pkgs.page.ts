import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-pkgs',
  templateUrl: './my-pkgs.page.html',
  styleUrls: ['./my-pkgs.page.scss'],
})
export class MyPkgsPage implements OnInit {

  constructor(private router: Router) { }
  volver(){
    this.router.navigateByUrl('/home-client');
  }
  ngOnInit() {
  }

}
