import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  title='Bienvenido a la aplicación de Interceptores - Certus';
  url='https://jsonplaceholder.typicode.com/posts';
  
  constructor( private http:HttpClient) { }


  ngOnInit():void{
    this.getMostrarData();
  }

  getMostrarData(){
    return this.http.get<any>(this.url)
  }
}