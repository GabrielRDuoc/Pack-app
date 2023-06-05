import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paquetes-cliente',
  templateUrl: './paquetes-cliente.page.html',
  styleUrls: ['./paquetes-cliente.page.scss'],
})
export class PaquetesClientePage implements OnInit {

  constructor(private router: Router) { }
  volver(){
    this.router.navigateByUrl('/home-client');
  }
  ngOnInit() {
  }

}
