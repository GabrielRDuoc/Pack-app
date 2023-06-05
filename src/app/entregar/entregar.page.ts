import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregar',
  templateUrl: './entregar.page.html',
  styleUrls: ['./entregar.page.scss'],
})
export class EntregarPage implements OnInit {

constructor(private router: Router) { }
volver(){
  this.router.navigateByUrl('/home');
}
Escanear_QR(){

}
ngOnInit() {
  }
}


