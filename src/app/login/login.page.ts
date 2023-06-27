import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/dbservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
correo: string="";
clave: string= ""
Clientes:any= [{
  id_cliente:0,
  nombre:"",
  apellido:"",
  correo:"",
  contraseña:""

}]
  toastController: any;
  
constructor(private router: Router,private servicioBD:BdserviceService) { }

async presentToast(msj:string) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 2000,
  });
  toast.present();
}
    
    login(){
      this.Clientes
      for(var val of this.Clientes){
        if(val.correo==this.correo && val.contraseña==this.clave){
          this.router.navigateByUrl('/ingresar')
        } else if(val.correo=="conserje@test.cl" && val.contraseña=="prueba123"){
          this.router.navigateByUrl('/home')
        }else{
          console.log("Usuario no registrado")
        }
      }
    }
    registrar(){
      this.router.navigateByUrl('/register')
    }
  ngOnInit() {
    this.servicioBD.dbstate().subscribe(res =>{
      if(res){
        this.servicioBD.fetchClientes().subscribe(item=>{
          this.Clientes=item;
                  })
      }
    });
  }

}
