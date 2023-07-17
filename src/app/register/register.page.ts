import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/dbservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name:string=""
  lastname:string=""
  email:string=""
  pass:string=""
  HouseN:string=""

  constructor(private router: Router,private servicioBD:BdserviceService) { }
  volver(){
    this.router.navigateByUrl('/home-client');
  }
  ngOnInit() {
    }
  registrar(){
    console.log("hola")
    this.servicioBD.dbstate().subscribe(res =>{
      if(res){
        this.servicioBD.insertarCliente(this.name,this.lastname,this.email,this.pass,this.HouseN,"user")
        this.router.navigateByUrl('/login')
      }
    });
    
  }
}
