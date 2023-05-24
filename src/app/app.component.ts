import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';

  token: string | null = null;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
  }

  logOut(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}

//Paso de información entre componentes:
//1. A través de @Inputs y @Outputs
//2. A través de inyección de constructores de componentes hijos @ViewChild, @ContentChile o ContentChildren
//3. A través de servicios (Promesas, Ovsercables, etc) ==> NGRX (Gestión del estado de la aplicación)
//4. A través de parametros en la ruta