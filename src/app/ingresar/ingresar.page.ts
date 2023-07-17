import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { ApiserviceService } from '../services/api.service';
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
residentes: any
residente: any

  constructor(private router: Router,private api:ApiserviceService) { }
  ingresar_paquete(){}
  volver(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }
  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.residentes=data;
    });
  }
  ionViewWillEnter(){
    this.getUsuarios();
  }
}
