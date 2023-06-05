import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
correo: string="";
clave: string= ""
  
constructor(private router: Router) { }
    
    login(){
      if (this.correo=="test@test.cl"){
        this.router.navigateByUrl('/home');
      }
      else{
        this.router.navigateByUrl('/home-client')
      }
    }
    registrar(){
      this.router.navigateByUrl('/register')
    }
  ngOnInit() {
  }

}
