import { Injectable } from "@angular/core";
import { SQLiteObject,SQLite } from "@awesome-cordova-plugins/sqlite/ngx";
import { Platform, ToastController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Cliente } from "./cliente";
import { Observable } from "rxjs/internal/Observable";



@Injectable({
    providedIn:'root'
})
export class BdserviceService{

    public database!: SQLiteObject;
    tablaClientes: string= "CREATE TABLE IF NOT EXIST  cliente (id_cliente INTEGER PRIMARY KEY, nombre VARCHAR(40),apellido VARCHAR(40),correo VARCHAR(40),contraseña VARCHAR(40));";
    primerCliente:string= "INSERT OR IGNORE INTO cliente (id_cliente,nombre,apellido,correo,contraseña) VALUES (1,residente,test,residente@test.cl,prueba123);";
    SegundoCliente:string= "INSERT OR IGNORE INTO cliente (id_cliente,nombre,apellido,correo,contraseña) VALUES (1,conserje,test,conserje@test.cl,prueba123);";
    listaUsuarios=new BehaviorSubject([]);
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
    
    constructor (private  toastController:ToastController,private sqlite:SQLite,private platform:Platform) {

    this.crearBD();  
    }
    
    async presentToast(msj:string) {
        const toast = await this.toastController.create({
          message: msj,
          duration: 2000,
        });
        toast.present();
      }
   dbstate(){
    return this.isDBReady.asObservable();
   }
   fetchClientes(): Observable <Cliente[]>{
    return this.listaUsuarios.asObservable();
   }
   async crearBD(){
  
    this.platform.ready().then(()=>{
      const creacion=this.sqlite.create({
        name:'bdClientes.db',
        location:'default'
      })
      creacion.then((db:SQLiteObject)=>{
        this.database=db;
        this.crearTablas();
      }).catch(e => {
        this.presentToast("Error BD:"+ e);
      })
    })
   }
   async crearTablas(){
    try{
      await this.database.executeSql(this.tablaClientes,[]);
      await this.database.executeSql(this.primerCliente,[]);

      this.buscarCliente();
      this.isDBReady.next(true);
    }catch(e){
      this.presentToast("Error Tablas"+ e);
    }
   }
   buscarCliente(){
    return this.database.executeSql('SELECT * FROM cliente',[]).then(res=>{
      let items: Cliente[] = [];
 
      if (res.rows.length>0){
        for (var i =0;i < res.rows.length; i++) {
          items.push({
            id_cliente:res.rows.item(i).id_cliente,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.items(i).apellido,
            correo: res.rows.item(i).correo,
            contraseña: res.rows.item(i).contraseña
          })
        }
      }
      this.listaUsuarios.next(items as any);
    })

    
   }
   async insertarCliente(titulo: any, texto: any){
    let data = [titulo,texto];
    return this.database.executeSql('INSERT INTO cliente(id_cliente,nombre,apellido,correo,contraseña) VALUES (?,?,?,?,?)',data).then(res=>{
      this.buscarCliente();
    });

  }
  async modificarNoticias(correo: any,nombre: any,apellido: any){
    let data = [nombre,apellido,correo];
    return this.database.executeSql('UPDATE cliente SET nombre = ?, apellido = ? WHERE correo = ?',data).then(data2=>{
      this.buscarCliente();
    })
  }

  async eliminarCliente(correo: any){

    return this.database.executeSql('DELETE FROM cliente WHERE icorreo = ?',[correo]).then(a=>{
      this.buscarCliente();
    })

  }

  async presentAlert(msj:string) {
    const alert = await this.toastController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
}