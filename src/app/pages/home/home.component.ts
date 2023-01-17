import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  CODIGO!:String;
  ID!:String;
  TITLE!:String;
  BODY!:string;
 
  titulo!:string;
  arrayusers:any = [];
  constructor(private Informacion:UsersService) { }

  ngOnInit(): void {
  this.titulo = this.Informacion.title
  }

  getmostrar(){
    this.CODIGO="Codigo";
    this.ID="ID"
    this.TITLE="Titulo"
    this.BODY="Body"
 

    this.Informacion.getMostrarData().subscribe(
      resultado => {
        console.log(resultado)
        this.arrayusers = resultado
      }, err =>{
        console.log('error')
      });

  }


}
