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
    tablaClientes: string = "CREATE TABLE IF NOT EXISTS cliente (id_cliente INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(40), apellido VARCHAR(40), correo VARCHAR(40), contraseña VARCHAR(40), cat VARCHAR(20), departamento VARCHAR(40));";
    primerCliente:string= "INSERT OR IGNORE INTO cliente (nombre,apellido,correo,contraseña,cat,departamento) VALUES ('residente','test','residente@test.cl','prueba123','user','101');";
    SegundoCliente:string= "INSERT OR IGNORE INTO cliente (nombre,apellido,correo,contraseña,cat) VALUES ('conserje','test','conserje@test.cl','prueba123','admin');";
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
      await this.database.executeSql("DROP TABLE IF EXISTS cliente",[]);
      await this.database.executeSql(this.tablaClientes,[]);
      await this.database.executeSql(this.primerCliente,[]);
      await this.database.executeSql(this.SegundoCliente,[]);

      this.buscarCliente();
      this.isDBReady.next(true);
    }catch(e){
      console.log(e)
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
            apellido: res.rows.item(i).apellido,
            correo: res.rows.item(i).correo,
            contraseña: res.rows.item(i).contraseña,
            cat:res.rows.item(i).cat
          })
        }
      }
      this.listaUsuarios.next(items as any);
    })

    
   }
   async insertarCliente(nombre: any, apellido: any, correo: any, contraseña: any,depto:any,cat: any){
    let data = [nombre,apellido,correo,contraseña,depto,cat];
    return this.database.executeSql('INSERT INTO cliente(nombre,apellido,correo,contraseña,departamento,cat) VALUES (?,?,?,?,?,?)',data).then(res=>{
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

    return this.database.executeSql('DELETE FROM cliente WHERE correo = ?',[correo]).then(a=>{
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