import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
departamento:string ="";
residente:string="";

  constructor(private router: Router) {}
  entregar_paquete(){
    this.router.navigateByUrl('/entregar');
  }
  ingresar_paquete(){
        this.router.navigateByUrl('/ingresar');
    }
  cerrar_sesion(){
    this.router.navigateByUrl('/login')
  }
  }


