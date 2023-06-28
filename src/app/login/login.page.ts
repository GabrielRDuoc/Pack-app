import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/dbservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string = "";
  clave: string = ""

  Clientes: any = [{
    id_cliente: 0,
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: ""

  }] as const
  toastController: any;

  constructor(private router: Router, private servicioBD: BdserviceService) { }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
    });
    toast.present();
  }

  login() {
    const cliente=this.Clientes.find((cliente: { correo: string; contraseña: string; }) => cliente.correo===this.correo&&cliente.contraseña===this.clave);
    if(cliente){
      if(cliente.cat==="admin") this.router.navigateByUrl('/ingresar')
      else this.router.navigateByUrl('/home-client');
    }
  }
  registrar() {
    this.router.navigateByUrl('/register')
  }
  ngOnInit() {
    this.servicioBD.dbstate().subscribe(res => {
      if (res) {
        this.servicioBD.fetchClientes().subscribe(item => {
          this.Clientes = item;
        })
      }
    });
  }

}
