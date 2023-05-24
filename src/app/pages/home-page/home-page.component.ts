import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  contactoSeleccionado: IContacto | undefined;
  token: string | null = null;

  constructor( private router: Router){

  }
  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
    //Leemos del estado del historial de navegación
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data
    }
      

  }
  navegarAContact(): void{

    let navigationExtras: NavigationExtras = {
      queryParams:{
        sexo: 'mujer',
      }
    }
    
    this.router.navigate(['contacts'],navigationExtras);

  }
}
