import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage implements OnInit {

  constructor(private router: Router) { }
  mi_buzon(){
    this.router.navigateByUrl('/paquetes-cliente');
      
  };
  historial(){
    this.router.navigateByUrl('/my-pkgs');
  };
  cerrar_sesion(){
    this.router.navigateByUrl('/login')
  }
  ngOnInit() {
  }

}
