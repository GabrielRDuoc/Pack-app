import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
residente: string =""
departamento: string =""
  constructor(private router: Router) { }
  ingresar_paquete(){}
  volver(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
