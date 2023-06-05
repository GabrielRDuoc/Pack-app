import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recibir',
  templateUrl: './recibir.page.html',
  styleUrls: ['./recibir.page.scss'],
})
export class RecibirPage implements OnInit {

  constructor(private router: Router) { }
  volver(){
    this.router.navigateByUrl('/home-client');
  }
  ngOnInit() {
  }

}
